<script lang="ts">
    import Testimonial from "$lib/Testimonials/Testimonial.svelte";
    let testimonials: HTMLElement;

    function scroll(amount: number): void {
        testimonials.scrollTo()
        testimonials.scrollBy(amount, 0);
    }
</script>

<div class="overflow-hidden scroll-smooth max-sm:mx-6 sm:px-16" bind:this={testimonials}>
    <div class="flex pt-16">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
    </div>
</div>

<div class="flex justify-center items-center mt-8">
    <img src="/arrow-left.png" width="54" height="54" class="cursor-pointer mr-8"
         on:click={() => {scroll(-383)}}>
    <img src="/arrow-left.png" width="54" height="54" class="rotate-180 cursor-pointer"
         on:click={() => {scroll(383)}}>
</div>