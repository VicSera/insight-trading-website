<script lang="ts">
    import Testimonials from "$lib/Testimonials/Testimonials.svelte";
    import {scrollReferences} from '$lib';

    let aboutUs;
    $: scrollReferences.update(refs => {
        refs.aboutUs = aboutUs;
        return refs;
    })
</script>

<div class="flex flex-col justify-center items-center bg-lightBlue shadow-huge mt-32" bind:this={aboutUs}>
    <div class="font-[700] text-[40px] leading-[40px] tracking-[1px] text-textQuaternary uppercase mt-10">
        About us
    </div>
    <div class="flex my-16">
        <div class="w-[612px] h-[366px] overflow-hidden mask">
            <img class="object-cover w-full h-full" src="/about-us/about-us-photo.png">
        </div>
        <div class="flex justify-center items-center
                    w-[612px] ml-16
                    font-[400] text-textQuaternary text-[24px] leading-[31.25px]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </div>
    </div>
</div>

<div class="mt-32">
    <div class="text-textTernary capitalize font-[700] text-[56px] leading-[72.91px] text-center mt-16">
        what our customers say
    </div>
    <div class="flex justify-center items-center mt-4">
        <div class="font-[400] text-[18.34px] leading-[32px] text-center w-[900px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </div>
    </div>
    <Testimonials/>
</div>

<style lang="postcss">
    .mask {
        mask-image: url("/circle.svg");
        mask-size: 20% 33.33%;
        mask-repeat: repeat;
    }
</style>