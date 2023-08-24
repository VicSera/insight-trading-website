<script lang="ts">
import {ButtonType} from "$lib/ButtonType.js";
import Metric from "$lib/Metric.svelte";
import Carousel from "$lib/Carousel/Carousel.svelte";
import Button from "$lib/Button.svelte";
</script>

<div class="relative h-[1050px] w-full overflow-hidden rounded-t-[80px]">
    <img src="/cardiologist.png" class="w-full h-full object-cover object-center">
    <div class="absolute top-[430px] left-0 right-0 h-[356px] flex justify-center">
        <div class="w-[322px] md:w-[628px]
                    h-full
                    rounded-[16px] backdrop-blur
                    border-2 border-[rgba(255,255,255,0.4)]
                    p-8
                    flex flex-col items-center justify-between">
            <div class="text-textLight text-center font-[700]
                        text-[24px] leading-[24px]
                        md:text-[80px] md:leading-[80px]">
                Welcome text!
            </div>
            <div class="text-textLight text-center font-[500]
                        text-[16px] leading-[19px]
                        md:text-[24px] md:leading-[28.5px]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.
            </div>
            <Button text="View products" />
        </div>
    </div>
</div>
<div class="relative top-[-75px]
            bg-textLight md:h-[246px] rounded-[32px]
            mx-12 md:mx-[96px]
            p-12 md:p-0
            flex justify-evenly items-center
            flex-col md:flex-row shadow-huge">
    <Metric value="99" unit="%" description="Customer<br>satisfaction" />
    <Metric value="32" unit="K" description="Active users" />
    <Metric value="20" unit="+" description="Team members" />
    <Metric value="240" unit="%" description="Company growth" />
</div>

<div class="bg-lightBlue px-[30px] md:px-[96px] py-[32px] md:py-[40px]
            mt-[-2rem] rounded-[32px]">
    <div class="text-center font-[700] text-[40px] leading-[40px] mb-8">Why choose us?</div>
    <Carousel/>
</div>

<div class="flex justify-center items-center py-10 md:py-[100px]">
    <div class="bg-red rounded-[32px] flex flex-col
                w-[1000px] h-[294px]
                px-6
                justify-evenly items-center">
        <div class="text-textLight
                    text-[48px] md:text-[72px]
                    leading-[53px] md:leading-[79.2px]
                    font-[500] text-center">
            Curious about what we can do for you?
        </div>
        <Button text="our services" type="{ButtonType.WhiteTransparent}"/>
    </div>
</div>