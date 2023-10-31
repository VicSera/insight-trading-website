<script>
    import Product from "$lib/Product.svelte";
    import {products} from '$lib/data/products';
    import Tag from "$lib/Tag.svelte";
</script>

<div class="mx-4 max-sm:mt-6 sm:mx-32 sm:mb-24">
    <div class="font-[700] text-[64px] leading-[54px] mb-6">
        Our <span class="text-productBlue">products</span>
    </div>
    <div class="font-[400] text-[32px] leading-[51px] text-productBlueSecondary">
        Commitment to innovation and quality
    </div>
    <div class="font-[400] text-[15px] leading-[24px] text-productBlueSecondary sm:w-[636px]">
        We offer a range of cutting-edge medical solutions for the treatment of cardiovascular and neurovascular disorders. Our products are designed to provide effective and safe options for interventional cardiology, neurovascular intervention, vascular and cardiac surgery.
    </div>
    <div class="mt-4 max-sm:mb-6">
        <Tag text="Label"/>
        <Tag active="true" text="Label 1"/>
        <Tag text="Label 2"/>
    </div>
</div>

<div class="flex flex-wrap justify-start items-stretch
            ml-4 sm:ml-32 sm:mr-28">
    {#each products as product}
        <Product product="{product}" flexibleSize="{true}"></Product>
    {/each}
</div>

