<script lang="ts">
    import Input from "$lib/Input.svelte";
    import Button from "$lib/Button.svelte";
    import {scrollReferences} from "$lib";
    import { english } from '$lib/language';

    let contact;
    $: scrollReferences.update(refs => {
        refs.contact = contact;
        return refs;
    })
</script>

<div class="flex flex-col sm:flex-row justify-center items-center mt-44" bind:this={contact}>
    <div class="relative bg-blue rounded-[32px] sm:w-[566px] sm:h-[491px]
                flex flex-col justify-center items-center
                py-8 px-16">
        <div class="font-[500]
                    text-[32px]
                    sm:text-[56px] leading-[56px]
                    text-textLight sm:mb-8
                    max-sm:w-full">
            {#if $english}
                Get in touch!
            {:else}
                Contactează-ne!
            {/if}
        </div>
        <div class="font-[400] text-[16px] leading-[24px] text-textLight">
            {#if $english}
                Thank you for your interest in contacting us. We value your feedback, questions, and comments, and we would be happy to hear from you.
                <br><br>
                To get in touch with us, please fill out the contact form below with your name, email address, and message, and we will get back to you as soon as possible.
            {:else}
                Vă mulțumim pentru interesul de a ne contacta. Apreciem feedback-ul, întrebările și comentariile dumneavoastră.
                <br><br>
                Pentru a intra în contact cu noi, vă rugăm să completați formularul de contact de mai jos cu numele, adresa de e-mail și mesajul dvs. și vă vom contacta cât mai curând posibil.
            {/if}
        </div>
        <img class="sm:absolute sm:bottom-4 sm:right-6 sm:mt-0 mt-4" src="/contact/smile.svg">
    </div>
    <div class="max-sm:rounded-b-[32px] sm:rounded-r-[32px]
                max-sm:mx-4 w-[90%] px-4 pt-8
                sm:w-[700px] sm:h-[416px] sm:px-16 py-4
                flex flex-col justify-evenly shadow-huge">
        <Input label="Name" helperText="Write your full name"/>
        <Input label="Email address" helperText="Write a valid email address"/>
        <Input label="Message" helperText="Drop us your message here"/>
        <div class="flex justify-center items-center"><Button text="send now"/></div>
    </div>
</div>

<div class="flex justify-center items-center w-full bg-textLight z-50 mt-32">
    <iframe class="w-full sm:w-[90%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.273075947796!2d26.115397676710145!3d44.427560402004296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2182bc0075%3A0x93b7790f1a07378d!2sInsight%20Trading!5e0!3m2!1sen!2sro!4v1691785589990!5m2!1sen!2sro" height="468" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
