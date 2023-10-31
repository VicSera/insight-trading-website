<script lang="ts">
    import Button from '$lib/Button.svelte';
    import type { Product } from '$lib/data/products';

    export let data: {product: Product};
</script>

{#if !!data.product}
    <div class="px-16 flex justify-center py-8 bg-bgAlternative">
        <div class="w-[612px]">
            <div class="w-[612px] rounded-[32px] overflow-hidden mb-6 shadow-product">
                <img class="w-full h-full object-fill" src="{`/products/${data.product.imagePaths[0]}`}">
            </div>
            <div class="flex justify-between">
                {#each data.product.imagePaths.slice(1) as imgPath}
                    <div class="w-[160px] h-[160px] rounded-[8px] overflow-hidden">
                        <img class="w-full h-full object-cover" src="{imgPath}">
                    </div>
                {/each}
<!--                <div class="w-[160px] [h-[160px] rounded-[8px] overflow-hidden">-->
<!--                    <img src="/cardiologist.png">-->
<!--                </div>-->
<!--                <div class="w-[160px] [h-[160px] rounded-[8px] overflow-hidden">-->
<!--                    <img src="/cardiologist.png">-->
<!--                </div>-->
<!--                <div class="w-[160px] [h-[160px] rounded-[8px] overflow-hidden">-->
<!--                    <img src="/cardiologist.png">-->
<!--                </div>-->
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
                Product description
            </div>
            <div class="font-[400] text-[16px] leading-[24px]">
                {data.product.descriptionEn}
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
