<script lang="ts">
    import Testimonials from "$lib/Testimonials/Testimonials.svelte";
    import {scrollReferences} from '$lib';
    import { english } from '$lib/language';

    let aboutUs;
    $: scrollReferences.update(refs => {
        refs.aboutUs = aboutUs;
        return refs;
    })
</script>

<div class="flex flex-col justify-center items-center bg-lightBlue shadow-huge mt-32" bind:this={aboutUs}>
    <div class="font-[700] text-[40px] leading-[40px] tracking-[1px] text-textQuaternary uppercase mt-10">
        {#if $english}
            About us
        {:else}
            Despre noi
        {/if}
    </div>
    <div class="flex flex-col sm:flex-row my-8 sm:my-16 mx-4">
        <div class="sm:w-[612px] sm:h-[366px] overflow-hidden mask">
            <img class="object-cover w-full h-full" src="/about-us/about-us-photo.png">
        </div>
        <div class="flex justify-center items-center
                    mt-8
                    sm:w-[612px] sm:ml-16 sm:mt-0
                    font-[400] text-textQuaternary text-[24px] leading-[31.25px]">
            {#if $english}
                We are active participants in the cardiology medical device industry, with a team of sales and support experts who bring together over 15 years of experience in the field.
                <br/>Our mission is clear: we aim to bring high-quality products and services at affordable prices, offering our customers the latest therapeutic technologies in the industry.
            {:else}
                Suntem participanți activi în industria dispozitivelor medicale pentru cardiologie cu o echipă formată din experți în vânzări și suport ce adună peste 15 ani de experiență în domeniu.
                <br/>Misiunea noastră este clară: vrem să aducem produse și servicii de înaltă calitate la prețuri accesibile, punând la dispoziția clienților noștri cele mai recente tehnologii terapeutice din domeniu.
            {/if}
        </div>
    </div>
</div>

<!--<div class="mt-32">-->
<!--    <div class="text-textTernary font-[700] mx-4-->
<!--                text-[32px] leading-[41.66px]-->
<!--                sm:text-[56px] sm:leading-[72.91px] sm:text-center mt-16">-->

<!--        {#if $english}-->
<!--            <span class="inline-block">What Our</span>-->
<!--            <span class="inline-block">Customers Say</span>-->
<!--        {:else}-->
<!--            Ce spun clienții noștri-->
<!--        {/if}-->
<!--    </div>-->
<!--    <div class="flex justify-center items-center mt-4 mx-4">-->
<!--        <div class="font-[400] text-[18.34px] leading-[32px] sm:text-center w-[900px]">-->
<!--            {#if $english}-->
<!--                We take pride in our close relationship with our customers, and we are delighted to share some of their words of appreciation.-->
<!--            {:else}-->
<!--                Ne mândrim cu relația noastră strânsă cu clienții noștri și suntem bucuroși să împărtășim câteva dintre cuvintele lor de apreciere.-->
<!--            {/if}-->
<!--        </div>-->
<!--    </div>-->
<!--    <Testimonials/>-->
<!--</div>-->

<style lang="postcss">
    .mask {
        mask-image: url("/circle.svg");
        mask-size: 20% 33.33%;
        mask-repeat: repeat;
    }
</style>