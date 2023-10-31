<script lang="ts">
    import Product from "$lib/Product.svelte";
    import Button from "$lib/Button.svelte";
    import {scrollReferences} from '$lib';
    import {products} from '$lib/data/products';

    let productsSection;
    $: scrollReferences.update(refs => {
        refs.products = productsSection;
        return refs;
    })
</script>

<div bind:this={productsSection} class="rounded-[32px] bg-lightBlue
            flex flex-col justify-evenly items-center
            px-6">
    <div class="uppercase font-[700]
                text-[32px] leading-[32px]
                md:text-[40px] md:leading-[40px]
                mt-10">
        Our products
    </div>
    <div class="font-[400] text-[16px] leading-[19px] text-center md:w-[588px] mt-10 mb-10">
        We take pride in our range of cutting-edge products, designed to revolutionize the treatment and surgical interventions in cardiology.    </div>
    <div class="flex flex-col md:flex-row
                justify-evenly items-center w-full">
        {#each products.slice(0, 3) as product}
            <Product product="{product}"/>
        {/each}
    </div>
    <div class="mt-10 mb-16">
        <Button text="View all products"
                onClick="{() => {
                    window.location = '/products';
                }}"/>
    </div>
</div>

<div class="flex justify-center items-center">
    <div class="bg-textTernary rounded-[32px] w-[1055px]
                px-6 md:px-[64px] py-[40px]
                my-10 md:my-28">
        <div class="uppercase text-textLight font-[700]
                    text-[32px] leading-[32px]
                    md:text-[40px] md:leading-[40px]
                    flex justify-center items-center mb-[40px]">
            Our partners
            <img class="ml-8" src="/sunrise-abstract.svg">
        </div>
        <div class="flex flex-col md:flex-row
                    justify-evenly items-center border-t border-textLight pt-[40px]">
            <img src="/partners/logo1.svg">
            <img src="/partners/logo_2.svg">
            <img src="/partners/logo_3.svg">
            <img src="/partners/logo_4.svg">
            <img src="/partners/logo_5.svg">
        </div>
    </div>
</div>
