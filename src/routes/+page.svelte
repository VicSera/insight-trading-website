<script lang="ts">
    import Products from "./Products.svelte";
    import Services from "./Services.svelte";
    import AboutUs from "./AboutUs.svelte";
    import Contact from "./Contact.svelte";
    import Home from './Home.svelte';
</script>

<!--HOME-->
<Home/>
<Products/>
<Services/>
<AboutUs/>
<Contact/>

<div class="flex flex-col justify-center items-center font-[400] text-[16px] mt-20 mb-20 cursor-pointer"
     on:click={() => window.scrollTo(0, 0)}>
    <div class="flex justify-center items-center">
        <img src="/arrow-small.svg">
        <img src="/arrow-big.svg">
        <img src="/arrow-small.svg">
    </div>
    Scroll back up
</div>

<style lang="postcss">

</style>