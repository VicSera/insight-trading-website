<script lang="ts">
    export let productName = 'Product name';
    export let brandName = 'Brand name';
</script>

<div class="flex flex-col md:w-[400px]">
    <div class="w-full h-[400px] md:h-[542px] rounded-[32px] overflow-hidden mb-6">
        <img src="/cardiologist.png"
             alt="Product image"
             class="w-full h-full object-cover"
        >
    </div>
    <div class="font-[700] text-[16px] leading-[20.83px]">
        {productName}
    </div>
    <div class="font-[400] text-[16px] leading-[20.83px] mb-6">
        {brandName}
    </div>
</div>