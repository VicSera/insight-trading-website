<script lang="ts">
    import Button from '$lib/Button.svelte';
    import type { Product } from '$lib/data/products';
    import { english } from '$lib/language';
    import { overlayActive, viewImages } from '$lib/events';

    export let data: {product: Product};

    function openImage(idx: number): void {
        overlayActive.set(true);
        viewImages.set({
            srcs: data.product.imagePaths,
            idx: idx
        })
    }

    let idx = 0;
    const mod = (a: number, b: number) => ((a % b) + b) % b;

    function next(): void {
        idx = mod(idx + 1, data.product.imagePaths.length);
    }

    function prev(): void {
        idx = mod(idx - 1, data.product.imagePaths.length);
    }
</script>

{#if !!data.product}
    <div class="flex flex-col sm:flex-row justify-center py-8 sm:px-16 bg-bgAlternative">
        <div class="max-sm:hidden w-[612px]">
            <div class="w-[612px] rounded-[32px] overflow-hidden mb-6 shadow-product">
                <img class="w-full h-full object-fill cursor-pointer"
                     src="{`/products/${data.product.imagePaths[0]}`}"
                     alt="product"
                     on:click={() => openImage(0)}>
            </div>
            <div class="grid grid-cols-3 gap-8">
                {#if data.product.imagePaths.length < 5}
                    {#each data.product.imagePaths.slice(1, 4) as imgPath, idx}
                        <div class="w-full h-[160px] rounded-[8px] overflow-hidden">
                            <img class="w-full h-full object-cover cursor-pointer"
                                 src="{imgPath}"
                                 alt="product"
                                 on:click={() => openImage(idx + 1)}>
                        </div>
                    {/each}
                {:else}
                    {#each data.product.imagePaths.slice(1, 3) as imgPath, idx}
                        <div class="w-full h-[160px] rounded-[8px] overflow-hidden">
                            <img class="w-full h-full object-cover cursor-pointer"
                                 src="{imgPath}"
                                 alt="product"
                                 on:click={() => openImage(idx + 1)}>
                        </div>
                    {/each}
                    <div class="w-full h-[160px] rounded-[8px] overflow-hidden bg-textLight cursor-pointer
                                flex justify-center items-center text-[40px]"
                         on:click={() => openImage(3)}>
                        + {data.product.imagePaths.length - 3}
                    </div>
                {/if}
            </div>
        </div>
        <div class="sm:hidden relative">
            <div class="absolute left-0 top-0 bottom-0 flex items-center ml-2">
                <div class="bg-textLight rounded-full">
                    <div class="bg-blue mask w-[40px] h-[40px] cursor-pointer"
                         on:click={() => {
                        prev();
                     }}>
                    </div>
                </div>
            </div>
            <div class="w-full h-[300px] overflow-hidden mb-2 bg-textLight">
                <img class="w-full h-full object-contain cursor-pointer"
                     src="{`/products/${data.product.imagePaths[idx]}`}"
                     alt="product">
            </div>
            <div class="absolute right-0 top-0 bottom-0 flex items-center mr-2 rotate-180">
                <div class="bg-textLight rounded-full">
                    <div class="bg-blue mask w-[40px] h-[40px] cursor-pointer"
                         on:click={() => {
                             next();
                         }}>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4 sm:gap-8
                    px-4 py-8
                    sm:px-8 sm:py-12 sm:w-[600px]">
            <div>
                <div class="font-[700] text-[32px] leading-[42px]">
                    {data.product.name}
                </div>
                <a class="font-[700] text-[16px] leading-[21px] text-producerBlue underline"
                   href="{data.product.producerLink}" target="_blank">
                    {data.product.producer}
                </a>
            </div>
            <div class="font-[700] text-[32px] leading-[42px] flex">
                <div class="bg-producerBlue h-[42px] w-[4px] rounded-full mr-2"></div>
                {#if $english}
                    Product description
                {:else}
                    Descriere produs
                {/if}
            </div>
            <div class="font-[400] text-[16px] leading-[24px]">
                {#if $english}
                    {data.product.descriptionEn}
                {:else}
                    {data.product.descriptionRo}
                {/if}
            </div>
            <div class="max-sm:flex max-sm:justify-center">
                <Button text="more details" onClick="{() => {
                    window.open(data.product.brochureLink, '_blank');
                }}"/>
            </div>
        </div>
    </div>
{:else}
    <div class="text-center font-700 text-[40px] my-10">We can't find this product! :(</div>
{/if}

<style>
    .mask {
        mask-image: image(url("/arrow-left.png"));
        -webkit-mask-image: url("/arrow-left.png");
        mask-size: 40px 40px;
    }
</style>