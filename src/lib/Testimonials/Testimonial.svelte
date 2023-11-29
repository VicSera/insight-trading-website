<script lang="ts">
    export let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
    export let name = 'Mike Torello';
    export let profession = 'Doctor';
</script>

<div class="w-[335px] h-[364px] px-4
            sm:w-[580px] sm:h-[305px] sm:px-16
            bg-lightBlue border-[3px] border-textTernary rounded-[42px]
            flex flex-col items-center justify-center relative flex-shrink-0 mr-12">
    <div class="flex-none absolute top-[-44px] w-[88px] h-[88px] rounded-full">
        <img src="/about-us/testimonial-pic.png" alt="testimonial person">
    </div>
    <div class="font-[400] text-[18px] leading-[26.2px] text-center text-textQuaternary mt-20">
        {text}
    </div>
    <div class="font-[700] text-[24px] leading-[26.2px] text-center text-textTernary mt-8 mb-2">
        {name}
    </div>
    <div class="font-montserrat font-[500] text-[12px] leading-[26.2px] text-center text-textQuaternary mb-8">
        {profession}
    </div>
</div>