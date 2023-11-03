<script lang="ts">
    import Product from "$lib/Product.svelte";
    import Button from "$lib/Button.svelte";
    import {scrollReferences} from '$lib';
    import {products} from '$lib/data/products';
    import { english } from '$lib/language';

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
        {#if $english}
            Our products
        {:else}
            PRODUSELE NOASTRE
        {/if}
    </div>
    <div class="font-[400] text-[16px] leading-[19px] text-center md:w-[588px] mt-10 mb-10">
        {#if $english}
            We take pride in our range of cutting-edge products, designed to revolutionize the treatment and surgical interventions in cardiology.
        {:else}
            La <strong>INSIGHT</strong>, ne-am angajat să aducem soluții de top pentru îmbunătățirea sănătății cardiace și să ne asigurăm că pacienții și profesioniștii din domeniul medical au acces la cele mai bune dispozitive și echipamente. Iată câteva dintre produsele noastre de referință:
        {/if}
    </div>
    <div class="flex flex-col md:flex-row
                justify-evenly items-center w-full">
        {#each products.slice(0, 3) as product}
            <Product product="{product}"/>
        {/each}
    </div>
    <div class="mt-10 mb-16">
        <Button text="View all products"
                textRo="Vezi produse"
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
            {#if $english}
                Our partners
            {:else}
                Partenerii Noștri
            {/if}
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
