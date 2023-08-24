<script lang="ts">
    import Step from "$lib/Carousel/Step.svelte";
    import Connector from "$lib/Carousel/Connector.svelte";
    import StepperPage from "$lib/Carousel/CarouselSlide.svelte";
    import CarouselSlide from '$lib/Carousel/CarouselSlide.svelte';

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
            <CarouselSlide iconSrc="/carousel/space-dashboard-filled.svg"
                         imgSrc="/carousel/doctor-in-suit.png"
                         title="Our products"
                         description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                         buttonText="view products"
            />
            <CarouselSlide iconSrc="/carousel/volunteer_activism.svg"
                         imgSrc="/carousel/laptop-statistics.png"
                         title="Our services"
                         description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                         buttonText="more"
            />
            <CarouselSlide iconSrc="/carousel/diversity_3.svg"
                         imgSrc="/carousel/holding-hands.png"
                         title="About us"
                         description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                         buttonText="more"
            />
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
