<script lang="ts">
    import Input from "$lib/Input.svelte";
    import Button from "$lib/Button.svelte";
    import {scrollReferences} from "$lib";
    import { english } from '$lib/language';
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';

    let contact;
    $: scrollReferences.update(refs => {
        refs.contact = contact;
        return refs;
    })

    page.subscribe((value) => console.log(value));
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
                shadow-huge">
        <form method="POST"
              use:enhance
              class="{$page.form ? 'hidden' : ''}
                     flex flex-col justify-evenly h-full">
            <Input name="name" label="Name" helperText="Write your full name"/>
            <Input name="email" label="Email address" helperText="Write a valid email address"/>
            <Input name="message" label="Message" helperText="Drop us your message here"/>
            <div class="flex justify-center items-center">
                <Button text="send now"
                        submit="{true}"
                />
            </div>
        </form>
        <div class="{$page.form && $page.form.success ? '' : 'hidden'} w-full h-full flex flex-col justify-center items-center gap-4">
            <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M116.143 53.7758V59.033C116.136 71.3554 112.146 83.3454 104.768 93.2148C97.3895 103.084 87.0188 110.304 75.202 113.798C63.3853 117.292 50.7558 116.872 39.197 112.602C27.6382 108.332 17.7695 100.439 11.0626 90.1019C4.35581 79.7646 1.17024 67.5362 1.98101 55.2405C2.79179 42.9448 7.55547 31.2406 15.5616 21.8734C23.5677 12.5062 34.3873 5.97803 46.4068 3.26239C58.4262 0.546756 71.0015 1.7892 82.2572 6.80442M116.143 13.3188L59 70.5188L41.8571 53.3759" stroke="#00C48C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="font-[500] text-[32px] leading-[24px] text-green">
                Success!
            </div>
        </div>
        <div class="{$page.form && !$page.form.success ? '' : 'hidden'} w-full h-full flex flex-col justify-center items-center gap-4">
            <div class="font-[500] text-[32px] leading-[24px] text-red">
                Something went wrong! :(
            </div>
        </div>
    </div>
</div>

<div class="flex justify-center items-center w-full bg-textLight z-50 mt-32">
<!--    <iframe class="w-full sm:w-[90%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.273075947796!2d26.115397676710145!3d44.427560402004296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2182bc0075%3A0x93b7790f1a07378d!2sInsight%20Trading!5e0!3m2!1sen!2sro!4v1691785589990!5m2!1sen!2sro" height="468" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
<!--    <iframe class="w-full sm:w-[90%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511.33802544700717!2d26.118902621810896!3d44.427539240809004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff21812f2353%3A0x386fb760670ca10e!2s11%2C%20Strada%20Maximilian%20Popper%2023%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1701219707656!5m2!1sen!2sro" height="468" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
    <iframe class="w-full sm:w-[90%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.6979054998263!2d26.121020123018205!3d44.42877409275131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff21470d1be9%3A0x3bed224a35b8d8ba!2s23%2C%20Strada%20Vulturilor%2056-58%2C%20Bucure%C8%99ti%20030167%2C%20Romania!5e0!3m2!1sen!2suk!4v1701258737599!5m2!1sen!2suk" height="468" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
