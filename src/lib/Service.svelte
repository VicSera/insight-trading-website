<script lang="ts">
    export let title = 'Title of service we offer';
    export let description = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.';
    export let imageFirst = false;
    export let watermarkText = '01';
    export let watermarkHighlight = '1st service';
</script>

<div class="flex items-center my-16 {imageFirst ? 'flex-row-reverse' : 'flex-row'}">
    <div class="flex flex-col w-[632px] relative {imageFirst ? 'ml-32' : 'mx-8'}">
        <div class="absolute z-0 font-[700] text-[240px] leading-[240px] opacity-10 top-[-33%] left-[-13%]">
            {watermarkText}
        </div>
        <div class="flex items-center mb-6 z-10">
            <div class="w-[72px] h-[2px] bg-red mr-4"></div>
            <div class="uppercase text-red font-[700] text-[18px] tracking-[6px]">{watermarkHighlight}</div>
        </div>
        <div class="font-[700] text-[64px] leading-[83.33px] w-[555px] z-10">
            {title}
        </div>
        <div class="font-[400] text-[16px] leading-[32px]">
            {description}
        </div>
    </div>
    <div class="w-[483px] h-[720px] rounded-[42px] overflow-hidden shadow-huge">
        <img class="object-cover w-full h-full" src="/cardiologist.png" alt="Service image">
    </div>
</div>