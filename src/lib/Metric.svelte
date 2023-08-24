<script lang="ts">
    export let value: string;
    export let unit: string;
    export let description: string;
</script>

<div class="flex flex-col items-center
            mb-8 md:mb-0">
    <div class="font-[700] text-[62px] leading-[62px]">
        <span class="text-textSecondary">{value}</span><span class="text-textTernary">{unit}</span>
    </div>
    <div class="font-[500] text-[24px] leading-[26px] text-center text-textQuaternary">
        {@html description}
    </div>
</div>
