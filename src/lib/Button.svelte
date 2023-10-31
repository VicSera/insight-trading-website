<script lang="ts">
    import {ButtonType} from '$lib/ButtonType';

    export let text: string;
    export let type: ButtonType = ButtonType.Red;
    export let onClick: () => void;
 </script>

{#if type === ButtonType.Red}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-red
                   h-[48px]
                   text-textLight uppercase text-[16px] leading-[20.83px] font-[700]">
        {text}
    </button>
{:else if type === ButtonType.Black}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-textPrimary
                   h-[48px]
                   text-textLight uppercase text-[16px] leading-[20.83px] font-[700]">
        {text}
    </button>
{:else if type === ButtonType.RedTransparent}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-transparent
                   border-2 border-red
                   h-[48px]
                   text-red uppercase text-[16px] leading-[20.83px] font-[700]">
        {text}
    </button>
{:else if type === ButtonType.BlackTransparent}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-transparent
                   border-2 border-textPrimary
                   h-[48px]
                   text-textPrimary uppercase text-[16px] leading-[20.83px] font-[700]">
        {text}
    </button>
{:else if type === ButtonType.WhiteTransparent}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-transparent
                   border-2 border-textLight
                   h-[48px]
                   text-textLight uppercase text-[16px] leading-[20.83px] font-[700]">
        {text}
    </button>
{/if}