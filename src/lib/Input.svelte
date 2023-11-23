<script lang="ts">
    export let name: string | undefined;
    export let label = 'Label';
    export let helperText = 'Helper text';
    let invalid = false;
</script>

<div class="text-openSans my-2">
    <div class="font-[400] text-[12px] leading-[16.5px]
                {invalid ? 'text-red' : 'text-disabled'}">{label}</div>

    <input name="{name}" required on:invalid={() => invalid = true} on:input={() => invalid = false}
           class="border-b outline-none transition-all box-border h-[30px] w-full
                  focus:border-b-2 {invalid ? 'border-red' : ''} font-[400] text-[16px] leading-[22px]"
           type="text">

    <div class="font-[400] text-[12px] leading-[16.5px] {invalid ? 'text-red' : 'text-disabled'}">
        {helperText}
    </div>
</div>