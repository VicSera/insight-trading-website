<script lang="ts">
    import type {PageSections} from '$lib/PageSections';

    export let section: PageSections;
    export let activeSection: PageSections;
    export let onClick: (section: PageSections) => void;
</script>

<button class="px-[16px] flex flex-col items-center justify-center cursor-pointer"
     on:click={() => onClick(section)}>
    {section.toString()}
    <div class="rounded-full w-3 h-3 mt-1 {section === activeSection ? 'bg-textLight' : 'bg-transparent'}"></div>
</button>