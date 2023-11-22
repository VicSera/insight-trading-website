<script lang="ts">
import {ButtonType} from "$lib/ButtonType.js";
import Metric from "$lib/Metric.svelte";
import Carousel from "$lib/Carousel/Carousel.svelte";
import Button from "$lib/Button.svelte";
import { english } from '$lib/language';
import { events } from '$lib/events';
</script>

<div class="relative h-[1050px] w-full overflow-hidden rounded-t-[80px]">
    <img src="/hero.png" class="w-full h-full object-cover object-center">
    <div class="absolute top-[430px] left-0 right-0 h-[356px] flex justify-center">
        <div class="w-[322px] md:w-[885px]
                    
                    rounded-[16px] backdrop-blur
                    border-2 border-[rgba(255,255,255,0.4)]
                    p-6
                    flex flex-col items-center justify-between">
            <div class="text-textLight text-center font-[700]
                        text-[24px] leading-[24px]
                        sm:text-[80px] sm:leading-[80px]">
                {#if $english}
                    Welcome to INSIGHT!
                {:else}
                    Bun venit la INSIGHT!
                {/if}
            </div>
            <div class="text-textLight text-center font-[500]
                        text-[16px] leading-[19px]">
                {#if $english}
                    We are active participants in the cardiology medical device industry, boasting a team of sales and support experts with a combined experience of over 15 years in the field
                {:else}
                    Suntem participanți activi în industria dispozitivelor medicale pentru cardiologie cu o echipă formată din experți în vânzări și suport ce adună peste 15 ani de experiență în domeniu.
                {/if}
            </div>
            <Button text="View products"
                    textRo="vezi produse"
                    onClick="{() => {
                        window.location = '/products';
                    }}"/>
        </div>
    </div>
</div>
<div class="relative top-[-75px]
            bg-textLight md:h-[246px] rounded-[32px]
            mx-12 md:mx-[96px]
            p-12 md:p-0
            flex justify-evenly items-center
            flex-col md:flex-row shadow-huge">
    {#if $english}
        <Metric value="99" unit="%" description="Customer<br>satisfaction" />
        <Metric value="32" unit="K" description="Active users" />
        <Metric value="20" unit="+" description="Team members" />
        <Metric value="240" unit="%" description="Company growth" />
    {:else}
        <Metric value="99" unit="%" description="Clienți<br>satisfăcuți" />
        <Metric value="32" unit="K" description="Utilizatori<br>activi" />
        <Metric value="20" unit="+" description="Membri în<br>echipa noastră" />
        <Metric value="240" unit="%" description="Creștere în<br>ultimii ani" />
    {/if}
</div>

<div class="bg-lightBlue px-[30px] md:px-[96px] py-[32px] md:py-[40px]
            mt-[-2rem] rounded-[32px]">
    <div class="text-center font-[700] text-[40px] leading-[40px] mb-8">
        {#if $english}
            Why choose us?
        {:else}
            De ce să ne alegi pe noi?
        {/if}
    </div>
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
            {#if $english}
                Curious about what we can do for you?
            {:else}
                Ești curios sa afli ce putem face pentru tine?
            {/if}
        </div>
        <Button text="our services"
                textRo="servicii"
                type="{ButtonType.WhiteTransparent}"
                onClick="{() => {
                   events.set('services');
               }}"
        />
    </div>
</div>