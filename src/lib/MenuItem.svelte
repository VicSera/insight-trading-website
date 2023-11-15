<script lang="ts">
    import type {PageSections} from '$lib/PageSections';
    import { english } from '$lib/language';
    import { translate } from '$lib/PageSections';

    export let section: PageSections;
    export let activeSection: PageSections;
    export let onClick: (section: PageSections) => void;
</script>

<button class="px-[16px] flex flex-col items-center justify-center
               max-sm:text-[32px] max-sm:font-[500] max-sm:text-blue
               cursor-pointer"
     on:click={() => onClick(section)}>
    {#if $english}
        {section.toString()}
    {:else}
        {translate(section)}
    {/if}
    <div class="rounded-full w-3 h-3 mt-1 {section === activeSection ? 'bg-textLight' : 'bg-transparent'}"></div>
</button>