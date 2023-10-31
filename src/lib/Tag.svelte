<script lang="ts">
    export let text: string;
    export let active = false;
    export let changed: (newValue: boolean) => void;

    function onClick(): void {
        active = !active;
        changed(active);
    }
</script>

<span class="rounded-full border-productBlue border-4 inline-flex justify-center items-center cursor-pointer"
      on:click={onClick}>
    <span class="font-[700] text-[16px] leading-[20.83px] uppercase select-none
            px-6 py-2 rounded-full border-textLight border-2 h-8 inline-flex justify-center items-center
            {active ? 'text-bgAlternative bg-productBlue' : 'text-productBlue'}">
        {text}
    </span>
</span>
