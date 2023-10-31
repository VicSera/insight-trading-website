<script lang="ts">
    import Button from "$lib/Button.svelte";

    export let iconSrc: string;
    export let imgSrc: string;
    export let title: string;
    export let description: string;
    export let buttonText: string;
    export let buttonAction: () => void;
</script>

<div class="max-md:hidden flex justify-center items-center w-full basis-full flex-shrink-0">
    <div class="flex flex-col items-center justify-between w-[342px] h-[400px] mr-16">
        <img src="{iconSrc}" alt="Icon">
        <div class="text-[48px] leading-[62.5px] font-[700]">{title}</div>
        <div class="text-[16px] leading-[19px] font-[400] text-center">{description}</div>
        <Button text="{buttonText}" onClick="{buttonAction}"></Button>
    </div>
    <div class="w-[612px] h-[542px]">
        <img src="{imgSrc}" alt="Image">
    </div>
</div>

<div class="md:hidden flex flex-col justify-center items-center w-full basis-full flex-shrink-0">
    <img src="{iconSrc}" alt="Icon">
    <div class="text-[48px] leading-[62.5px] font-[700] mt-6">{title}</div>
    <div class="text-[16px] leading-[19px] font-[400] text-center mt-6">{description}</div>
    <div class="w-full h-[300px] mt-4">
        <img src="{imgSrc}" alt="Image">
    </div>
    <Button text="{buttonText}" onClick="{buttonAction}"></Button>
</div>