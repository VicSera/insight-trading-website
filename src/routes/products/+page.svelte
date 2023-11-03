<script lang="ts">
    import Product from "$lib/Product.svelte";
    import {products} from '$lib/data/products';
    import Tag from "$lib/Tag.svelte";
    import {english} from "$lib/language";
    import {onMount} from "svelte";

    let filteredProducts: Product[] = products;
    const tags: {[id: string]: {tagEn: string; tagRo: string; active: boolean}} = {};
    let values = [];
    onMount(() => {
        for (const product of products) {
            for (let idx = 0; idx < product.categoryEn.length; idx++) {
                if (tags[product.categoryEn[idx]]) continue;
                tags[product.categoryEn[idx]] = {
                    tagEn: product.categoryEn[idx],
                    tagRo: product.categoryRo[idx],
                    active: false
                };
            }
        }

        values = Object.values(tags);
    })

    function updateActive(tag: string, active: boolean): void {
        tags[tag].active = active;

        const activeTags = Object.values(tags).filter((tag) => tag.active).map((tag) => tag.tagEn);
        if (activeTags.length === 0) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter((product) => product.categoryEn.some((tag) => activeTags.includes(tag)))
        }
    }
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
        {#if $english}
            {#each values as tag}
                <Tag text="{tag.tagEn}" active="{tag.active}" changed="{(active) => {updateActive(tag.tagEn, active)}}"/>
            {/each}
        {:else}
            {#each values as tag}
                <Tag text="{tag.tagRo}" active="{tag.active}" changed="{(active) => {updateActive(tag.tagEn, active)}}"/>
            {/each}
        {/if}
    </div>
</div>

<div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
            ml-4 md:ml-32 md:mr-28">
    {#each filteredProducts as product}
        <Product product="{product}" flexibleSize="{true}"></Product>
    {/each}
</div>

