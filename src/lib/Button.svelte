<script lang="ts">
    import {ButtonType} from '$lib/ButtonType';
    import { english } from '$lib/language';

    export let text: string;
    export let textRo: string;
    export let type: ButtonType = ButtonType.Red;
    export let submit: boolean;
    export let onClick: () => void;
 </script>

{#if type === ButtonType.Red}
    <button type="{submit ? 'submit' : 'button'}" on:click={onClick} class="rounded-full py-[8px] px-[16px]
                   bg-red hover:bg-[#B83B39] active:bg-gradient-to-br from-[#DF3538] to-[#B83B39]
                   hover:shadow-button active:shadow-button
                   h-[48px]
                   text-textLight uppercase text-[16px] leading-[20.83px] font-[700]">
        {#if ($english || !textRo)}
            {text}
        {:else}
            {textRo}
<!--            linear-gradient(135deg, #DF3538 0%, #B83B39 100%)-->
        {/if}
    </button>
{:else if type === ButtonType.Black}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-textPrimary
                   hover:shadow-button active:shadow-button
                   h-[48px]
                   text-textLight uppercase text-[16px] leading-[20.83px] font-[700]">
        {#if ($english || !textRo)}
            {text}
        {:else}
            {textRo}
        {/if}
    </button>
{:else if type === ButtonType.RedTransparent}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-transparent
                   hover:shadow-button active:shadow-button
                   border-2 border-red
                   h-[48px]
                   text-red uppercase text-[16px] leading-[20.83px] font-[700]">
        {#if ($english || !textRo)}
            {text}
        {:else}
            {textRo}
        {/if}
    </button>
{:else if type === ButtonType.BlackTransparent}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-transparent
                   hover:shadow-button active:shadow-button
                   border-2 border-textPrimary
                   h-[48px]
                   text-textPrimary uppercase text-[16px] leading-[20.83px] font-[700]">
        {#if ($english || !textRo)}
            {text}
        {:else}
            {textRo}
        {/if}
    </button>
{:else if type === ButtonType.WhiteTransparent}
    <button on:click={onClick} class="rounded-full py-[8px] px-[16px] bg-transparent
                   border-2 border-textLight
                   h-[48px]
                   text-textLight uppercase text-[16px] leading-[20.83px] font-[700]">
        {#if ($english || !textRo)}
            {text}
        {:else}
            {textRo}
        {/if}
    </button>
{/if}