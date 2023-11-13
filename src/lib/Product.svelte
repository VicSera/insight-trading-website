<script lang="ts">
    import type { Product } from '$lib/data/products';

    export let product: Product;
    export let flexibleSize = false;

    function onClick(): void {
        window.location = `/products/${product.id}`;
    }
</script>

<div class="flex flex-col {flexibleSize ? 'basis-[50%] sm:basis-[25%] pr-4 mb-8' : 'w-[280px] sm:w-[400px]'} cursor-pointer"
     on:click="{onClick}">
    <div class="w-full
                {flexibleSize ? 'rounded-[8px] max-sm:grow h-[140px] sm:w-[294px] sm:h-[294px]'
                : 'h-[400px] sm:h-[542px] rounded-[32px] bg-textLight'}
                overflow-hidden mb-6">
        <img src="{`/products/${product.mainImage ?? product.imagePaths[0]}`}"
             alt="{product?.name}"
             class="w-full h-full {flexibleSize ? 'object-cover' : 'object-contain'}"
        >
    </div>
    <div class="font-[700] text-[16px] leading-[20.83px]">
        {product?.name}
    </div>
    <div class="font-[400] text-[16px] leading-[20.83px] mb-6">
        {product?.producer}
    </div>
</div>