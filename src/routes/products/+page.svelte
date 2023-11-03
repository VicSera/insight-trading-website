<script>
    import Product from "$lib/Product.svelte";
    import {products} from '$lib/data/products';
    import Tag from "$lib/Tag.svelte";
    import {english} from "$lib/language";
</script>

<div class="mx-4 max-sm:mt-6 sm:mx-32 sm:mb-24">
    <div class="font-[700] text-[64px] leading-[54px] mb-6">
        {#if $english}
            Our <span class="text-productBlue">products</span>
        {:else}
            Produsele <span class="text-productBlue">noastre</span>
        {/if}
    </div>
    <div class="font-[400] text-[32px] leading-[51px] text-productBlueSecondary">
        {#if $english}
            Commitment to innovation and quality
        {:else}
            Angajament față de inovație și calitate.
        {/if}
    </div>
    <div class="font-[400] text-[15px] leading-[24px] text-productBlueSecondary sm:w-[636px]">
        {#if $english}
            We offer a range of cutting-edge medical solutions for the treatment of cardiovascular and neurovascular disorders. Our products are designed to provide effective and safe options for interventional cardiology, neurovascular intervention, vascular and cardiac surgery.
        {:else}
            Furnizăm o varietate de soluții medicale avansate pentru tratarea afecțiunilor cardiovasculare. Produsele noastre sunt atent elaborate pentru a oferi opțiuni eficiente și sigure atât pentru cardiologia intervențională, cât și pentru chirurgia vasculară și cardiacă.
        {/if}
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

