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
</script>

{#if !!data.product}
    <div class="px-16 flex justify-center py-8 bg-bgAlternative">
        <div class="w-[612px]">
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
        <div class="flex flex-col gap-8 px-8 py-12 w-[600px]">
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
            <div>
                <Button text="more details" onClick="{() => {
                    window.open(data.product.brochureLink, '_blank');
                }}"/>
            </div>
        </div>
    </div>
{:else}
    <div class="text-center font-700 text-[40px] my-10">We can't find this product! :(</div>
{/if}
