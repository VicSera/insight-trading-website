<script lang="ts">
    import Service from "$lib/Service.svelte";
    import {scrollReferences} from '$lib';

    let services;
    $: scrollReferences.update(refs => {
        refs.services = services;
        return refs;
    })
</script>

<div bind:this={services} class="flex flex-col items-center shadow-huge">
    <div class="uppercase font-[700] text-[40px] leading-[40px] tracking-[1px] my-16">
        Our services
    </div>
    <Service/>
    <Service imageFirst="{true}" watermarkText="02" watermarkHighlight="2nd service"/>
    <Service watermarkText="03" watermarkHighlight="3rd service"/>
</div>