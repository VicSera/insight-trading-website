<script lang="ts">
    import Product from "$lib/Product.svelte";
    import Button from "$lib/Button.svelte";
    import {scrollReferences} from '$lib';

    let products;
    $: scrollReferences.update(refs => {
        refs.products = products;
        return refs;
    })
</script>

<div bind:this={products} class="rounded-[32px] bg-lightBlue
            flex flex-col justify-evenly items-center
            px-6">
    <div class="uppercase font-[700]
                text-[32px] leading-[32px]
                md:text-[40px] md:leading-[40px]
                mt-10">
        Our products
    </div>
    <div class="font-[400] text-[16px] leading-[19px] text-center md:w-[588px] mt-10 mb-10">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
    </div>
    <div class="flex flex-col md:flex-row
                justify-evenly items-center w-full">
        <Product/>
        <Product/>
        <Product/>
    </div>
    <div class="mt-10 mb-16">
        <Button text="View all products" />
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
