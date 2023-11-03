<script lang="ts">
    import Step from '$lib/Carousel/Step.svelte';
    import Connector from '$lib/Carousel/Connector.svelte';
    import CarouselSlide from '$lib/Carousel/CarouselSlide.svelte';
    import { english } from '$lib/language';
    import { events } from '$lib/events';

    export let activeStep = 0;
    let carousel: HTMLElement;

    function scrollToPage(page?: number) {
        if (page != null && page >= 0 && page < 3) {
            activeStep = page;
        }
        carousel.scroll(activeStep * carousel.clientWidth, 0)
    }

    function mod(a: number, b: number): number {
        return ((a % b) + b) % b;
    }
</script>

<div class="flex items-center justify-center mb-8">
    <Step active="{activeStep === 0}" onClick="{() => {scrollToPage(0)}}"/>
    <Connector/>
    <Step active="{activeStep === 1}" onClick="{() => {scrollToPage(1)}}"/>
    <Connector/>
    <Step active="{activeStep === 2}" onClick="{() => {scrollToPage(2)}}"/>
</div>

<div class="flex flex-col md:flex-row items-center justify-between">
    <img src="/arrow-left.png" width="75" height="75"
         class="max-md:hidden cursor-pointer"
         on:click={() => {
            activeStep = mod(activeStep - 1, 3);
            scrollToPage();
         }}>
    <div class="grow overflow-hidden scroll-smooth w-full" bind:this={carousel}>
        <div class="flex">
            {#if $english}
                <CarouselSlide iconSrc="/carousel/space-dashboard-filled.svg"
                               imgSrc="/carousel/doctor-in-suit.png"
                               title="Our products"
                               description="We take pride in our range of cutting-edge products, designed to revolutionize the treatment and surgical interventions in cardiology."
                               buttonText="view products"
                               buttonAction="{() => {
                                   window.location = '/products';
                               }}"
                />
                <CarouselSlide iconSrc="/carousel/volunteer_activism.svg"
                               imgSrc="/carousel/laptop-statistics.png"
                               title="Our services"
                               description="We're not just a medical device provider - we're a trusted partner that offers a wide range of essential services to meet the needs of the medical industry."
                               buttonText="services"
                               buttonAction="{() => {
                                   events.set('services');
                               }}"
                />
                <CarouselSlide iconSrc="/carousel/diversity_3.svg"
                               imgSrc="/carousel/holding-hands.png"
                               title="About us"
                               description="We are committed to delivering top-notch solutions for enhancing cardiac health and ensuring that both patients and medical professionals have access to the finest devices and equipment."
                               buttonText="about us"
                               buttonAction="{() => {
                                   events.set('aboutus');
                               }}"
                />
            {:else}
                <CarouselSlide iconSrc="/carousel/space-dashboard-filled.svg"
                               imgSrc="/carousel/doctor-in-suit.png"
                               title="Produse"
                               description="Ne mândrim cu gama noastră de produse de vârf, concepute pentru a revoluționa tratamentul și intervențiile chirurgicale cardiace."
                               buttonText="vezi produse"
                               buttonAction="{() => {
                                   window.location = '/products';
                               }}"
                />
                <CarouselSlide iconSrc="/carousel/volunteer_activism.svg"
                               imgSrc="/carousel/laptop-statistics.png"
                               title="Servicii"
                               description="Nu suntem doar un furnizor de dispozitive medicale - suntem un partener de încredere care oferă o gamă largă de servicii esențiale pentru a răspunde nevoilor din industria medicală."
                               buttonText="servicii"
                               buttonAction="{() => {
                                   events.set('services');
                               }}"
                />
                <CarouselSlide iconSrc="/carousel/diversity_3.svg"
                               imgSrc="/carousel/holding-hands.png"
                               title="Despre noi"
                               description="Ne-am angajat să aducem soluții de top pentru îmbunătățirea sănătății cardiace și să ne asigurăm că pacienții și profesioniștii din domeniul medical au acces la cele mai bune dispozitive și echipamente."
                               buttonText="despre noi"
                               buttonAction="{() => {
                                   events.set('aboutus');
                               }}"
                />
            {/if}
        </div>
    </div>
    <img src="/arrow-left.png" width="75" height="75"
         class="max-md:hidden rotate-180 cursor-pointer"
         on:click={() => {
            activeStep = mod(activeStep + 1, 3);
            scrollToPage();
         }}>
    <div class="md:hidden flex justify-center items-center mt-16">
        <img src="/arrow-left.png" width="54" height="54"
             class="cursor-pointer mr-16"
             on:click={() => {
            activeStep = mod(activeStep - 1, 3);
            scrollToPage();
         }}>
        <img src="/arrow-left.png" width="54" height="54"
             class="rotate-180 cursor-pointer"
             on:click={() => {
            activeStep = mod(activeStep + 1, 3);
            scrollToPage();
         }}>
    </div>
</div>
