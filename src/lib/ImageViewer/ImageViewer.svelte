<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { overlayActive, viewImages } from '$lib/events';
    import type { Unsubscriber } from 'svelte/store';

    let srcs: string[] = [];
    let idx = 0;
    let unsubscribe: Unsubscriber;
    onMount(() => {
        unsubscribe = viewImages.subscribe((args) => {
            console.log(args);
            srcs = args.srcs;
            idx = args.idx;
        })
    })

    onDestroy(() => {
        if (unsubscribe) unsubscribe();
    })

    const mod = (a: number, b: number) => ((a % b) + b) % b;

    function next(): void {
        idx = mod(idx + 1, srcs.length);
    }

    function prev(): void {
        idx = mod(idx - 1, srcs.length);
    }
</script>

<div class="absolute top-0 bottom-0 left-0 right-0 bg-overlay z-[999]
            flex justify-center items-center"
     on:click={() => overlayActive.set(false)}>
    <div class="w-[134]">
        <div class="bg-textLight mask w-[54px] h-[54px] cursor-pointer mx-10"
             on:click={(event) => {
                 prev();
                 event.stopPropagation();
         }}>
        </div>
    </div>
    <div class="bg-textLight grow h-[85%]">
        <img src="/products/{srcs[idx]}"
             class="w-full h-full object-contain"
             alt="product"
             on:click={(event) => event.stopPropagation()}>
    </div>
    <div class="w-[134]">
        <div class="bg-textLight mask w-[54px] h-[54px] cursor-pointer mx-10 rotate-180"
             on:click={(event) => {
                 next();
                 event.stopPropagation();
         }}>
        </div>
    </div>
    <div class="absolute bottom-4 text-textLight text-[22px]">
        {idx + 1}/{srcs.length}
    </div>
</div>

<style>
    .mask {
        mask-image: image(url("/arrow-left.png"));
        -webkit-mask-image: url("/arrow-left.png");
        mask-size: 54px 54px;
    }
</style>