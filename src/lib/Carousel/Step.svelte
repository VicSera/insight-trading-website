<script lang="ts">
    export let active: string;
    export let onClick: string;
</script>

<div class="border-2 {active ? 'border-stepperActive' : 'border-stepperInactive'}
            rounded-full
            h-8 w-8
            md:h-12 md:w-12
            flex justify-center items-center cursor-pointer flex-shrink-0"
    on:click={onClick}>
    <div class="{active ? 'bg-stepperActive' : 'bg-stepperInactive'}
                h-4 w-4
                md:h-6 md:w-6
                rounded-full"></div>
</div>
