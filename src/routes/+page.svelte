<script lang="ts">
    import Products from "./Products.svelte";
    import Services from "./Services.svelte";
    import AboutUs from "./AboutUs.svelte";
    import Contact from "./Contact.svelte";
    import Home from './Home.svelte';
    import { english } from '$lib/language';
</script>

<Home/>
<Products/>
<Services/>
<AboutUs/>
<Contact/>

<div class="flex flex-col justify-center items-center font-[400] text-[16px] mt-20 mb-20 cursor-pointer"
     on:click={() => window.scrollTo(0, 0)}>
    <div class="flex justify-center items-center">
        <img alt="arrow" src="/arrow-small.svg">
        <img alt="arrow" src="/arrow-big.svg">
        <img alt="arrow" src="/arrow-small.svg">
    </div>
    {#if $english}
        Scroll back up
    {:else}
        Înapoi sus
    {/if}
</div>

<style lang="postcss">

</style>