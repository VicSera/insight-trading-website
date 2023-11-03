<script lang="ts">
    import Service from "$lib/Service.svelte";
    import {scrollReferences} from '$lib';
    import { english } from '$lib/language';

    let services;
    $: scrollReferences.update(refs => {
        refs.services = services;
        return refs;
    })
</script>

<div bind:this={services} class="flex flex-col items-center shadow-huge">
    <div class="uppercase font-[700] text-[40px] leading-[40px] tracking-[1px] my-16">
        {#if $english}
            Our services
        {:else}
            Serviciile noastre
        {/if}
    </div>
    {#if $english}
        <Service title="Supplying high-quality medical devices."
                 description="Our primary service is the supply of high-quality medical devices used in cardiology. From stents to catheters, we ensure that our products are of the highest quality, reliable, and compliant with the latest medical standards."
                 watermarkText="01"
                 watermarkHighlight="1st service"
                 imageSrc="/services/2.jpg"
        />
        <Service title="Professional assistance."
                 description="We are here to provide specialized professional assistance. Our team of medical experts is at your disposal to answer questions, guide you in choosing the most suitable devices for your needs, and provide you with up-to-date information on the latest medical technologies and procedures."
                 imageFirst="{true}"
                 watermarkText="02"
                 watermarkHighlight="2nd service"
                 imageSrc="/services/3.jpg"
        />
        <Service title="Fast and efficient delivery."
                 description="We understand how crucial time is in the medical field. That's why we provide products with fast and efficient delivery to ensure that medical devices reach their destination on time and in optimal conditions. We have a well-established network to facilitate distribution nationwide."
                 watermarkText="03"
                 watermarkHighlight="3rd service"
                 imageSrc="/services/4.jpg"
        />
    {:else}
        <Service title="Furnizarea dispozitivelor medicale de calitate"
                 description="Principalul nostru serviciu este furnizarea de dispozitive medicale de înaltă calitate utilizate în cardiologie. De la stent-uri la catetere, ne asigurăm că produsele noastre sunt de cea mai bună calitate, fiabile și conforme cu cele mai recente standarde medicale."
                 watermarkText="01"
                 watermarkHighlight="1st service"
                 imageSrc="/services/2.jpg"
        />
        <Service title="Asistență profesională"
                 description="Suntem aici pentru a oferi asistență profesională specializată. Echipa noastră de experți în domeniul medical vă stă la dispoziție pentru a răspunde la întrebări, a vă ghida în alegerea celor mai potrivite dispozitive pentru nevoile dvs. și pentru a vă oferi informații actualizate cu privire la cele mai recente tehnologii și proceduri medicale."
                 imageFirst="{true}"
                 watermarkText="02"
                 watermarkHighlight="2nd service"
                 imageSrc="/services/3.jpg"
        />
        <Service title="Livrare rapidă și eficientă"
                 description="Înțelegem cât de important este timpul în domeniul medical. De aceea, oferim produse cu livrare rapidă și eficientă pentru a asigura că dispozitivele medicale ajung la destinație la timp și în condiții optime. Avem o rețea bine pusă la punct pentru a facilita distribuția în toată țara."
                 watermarkText="03"
                 watermarkHighlight="3rd service"
                 imageSrc="/services/4.jpg"
        />
    {/if}
</div>