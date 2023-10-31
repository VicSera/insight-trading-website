<script lang="ts">
    export let label = 'Label';
    export let helperText = 'Helper text';
</script>

<div class="text-openSans my-2">
    <div class="font-[400] text-[12px] leading-[16.5px] text-disabled">{label}</div>

    <input class="border-b outline-none transition-all box-border h-[30px] w-full
                  focus:border-b-2 font-[400] text-[16px] leading-[22px]" type="text">

    <div class="font-[400] text-[12px] leading-[16.5px] text-disabled">
        {helperText}
    </div>
</div>