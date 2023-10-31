<script lang="ts">
    export let title = 'Title of service we offer';
    export let description = 'CHANGE ME';
    export let imageFirst = false;
    export let watermarkText = 'CHANGE ME';
    export let watermarkHighlight = 'CHANGE ME';
    export let imageSrc: string;
</script>

<div class="flex items-center mx-12 my-16 {imageFirst ? 'flex-row-reverse' : 'flex-row'}">
    <div class="flex flex-col items-start justify-stretch sm:w-[632px] relative {imageFirst ? 'sm:ml-32' : 'sm:mx-8'}">
        <div class="absolute z-0
                    text-center
                    font-[700] text-[240px] leading-[240px] opacity-10
                    top-[-110px] sm:top-[-33%] sm:left-[-13%]">
            {watermarkText}
        </div>
        <div class="flex items-center mb-6 z-10">
            <div class="w-[72px] h-[2px] bg-red mr-4"></div>
            <div class="uppercase text-red font-[700] text-[18px] leading-[23.44px] tracking-[6px]">
                {watermarkHighlight}
            </div>
        </div>
        <div class="font-[700]
                    text-[40px] leading-[52px]
                    sm:text-[64px] sm:leading-[83.33px] sm:w-[555px] z-10">
            {title}
        </div>
        <div class="mt-6 font-[400] text-[16px] leading-[32px]">
            {description}
        </div>
    </div>
    <div class="hidden sm:block w-[483px] h-[720px] rounded-[42px] overflow-hidden shadow-huge">
        <img class="object-cover w-full h-full"
             src="{imageSrc}"
             alt="service">
    </div>
</div>