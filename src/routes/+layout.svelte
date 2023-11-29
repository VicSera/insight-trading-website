<script lang="ts">
    import '../app.css';
    import {scrollReferences} from '$lib/ScrollContext';
    import type {ScrollReferences} from '$lib/ScrollReferences';
    import {PageSections} from '$lib/PageSections';
    import MenuItem from '$lib/MenuItem.svelte';
    import { english } from '$lib/language';
    import { events, overlayActive } from '$lib/events';
    import ImageViewer from '$lib/ImageViewer/ImageViewer.svelte';

    let burgerMenuActive = false;

    let y = 0;
    const offsetValue = 100;
    let activeSection: PageSections;
    let scrollRefs: ScrollReferences = {};
    scrollReferences.subscribe(refs => {
        scrollRefs = refs;
    })

    $: {
        let scrollWithOffset = y + offsetValue;
        if (!!scrollRefs.contact && scrollRefs.contact.offsetTop < scrollWithOffset) {
            activeSection = PageSections.Contact;
        } else if (!!scrollRefs.aboutUs && scrollRefs.aboutUs.offsetTop < scrollWithOffset) {
            activeSection = PageSections.AboutUs;
        } else if (!!scrollRefs.services && scrollRefs.services.offsetTop < scrollWithOffset) {
            activeSection = PageSections.Services;
        } else if (!!scrollRefs.products && scrollRefs.products.offsetTop < scrollWithOffset
                   || window?.location?.pathname !== '/') {
            activeSection = PageSections.Products;
        } else {
            activeSection = PageSections.Home;
        }
    }

    function onMenuItemClick(item: PageSections): void {
        if (window.location.pathname !== '/') {
            window.location = '/';
        }
        switch (item) {
            case PageSections.Home:
                window.scrollTo(0, 0);
                return;
            case PageSections.Products:
                window.location = '/products';
                return;
            case PageSections.Services:
                window.scrollTo(0, scrollRefs.services?.offsetTop - offsetValue + 5 ?? 0);
                return;
            case PageSections.AboutUs:
                window.scrollTo(0, scrollRefs.aboutUs?.offsetTop - offsetValue + 5 ?? 0);
                return;
            case PageSections.Contact:
                window.scrollTo(0, scrollRefs.contact?.offsetTop - offsetValue + 5 ?? 0);
                return;
        }
    }

    events.subscribe((value) => {
        if (value === 'services') {
            window.scrollTo(0, scrollRefs.services?.offsetTop - offsetValue + 5 ?? 0);
        } else if (value === 'aboutus') {
            window.scrollTo(0, scrollRefs.aboutUs?.offsetTop - offsetValue + 5 ?? 0);
        }
    })
</script>

<svelte:window bind:scrollY={y} />

<div class="{$overlayActive ? 'overflow-hidden h-[100vh]' : ''}">
    <nav class="max-sm:hidden flex justify-center items-center px-[96px] py-[24px]">
        <div class="flex-1">
            <div class="h-[58px] w-auto">
                <img class="mr-auto object-contain h-full" src="/logo.png" alt="Insight Trading Logo">
            </div>
        </div>
        <div class="flex rounded-full justify-between text-textLight font-[500] bg-blue
                    px-[24px] py-[8px] h-[76px] fixed z-50">
            <MenuItem section="{PageSections.Home}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
            <MenuItem section="{PageSections.Products}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
            <MenuItem section="{PageSections.Services}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
            <MenuItem section="{PageSections.AboutUs}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
            <MenuItem section="{PageSections.Contact}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
        </div>
        <div class="text-right flex-1">
            <div class="ml-auto">
                <span class="cursor-pointer {$english ? 'font-bold' : ''}"
                    on:click={() => english.set(true)}>
                    EN
                </span>
                |
                <span class="cursor-pointer {$english ? '' : 'font-bold'}"
                      on:click={() => english.set(false)}>
                    RO
                </span>
            </div>
        </div>
    </nav>
    <nav class="sm:hidden w-full">
        <div class="flex justify-between items-center">
            <div class="h-[58px] w-auto">
                <img class="mr-auto object-contain h-full" src="/logo.png" alt="Insight Trading Logo">
            </div>
            {#if !burgerMenuActive}
                <svg on:click="{() => {burgerMenuActive = true}}"
                     width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12.75" y1="16.25" x2="34.29" y2="16.25" stroke="#141415" stroke-width="1.5" stroke-linecap="square"/>
                    <line x1="12.75" y1="23.25" x2="34.29" y2="23.25" stroke="#141415" stroke-width="1.5" stroke-linecap="square"/>
                    <line x1="12.75" y1="30.25" x2="34.29" y2="30.25" stroke="#141415" stroke-width="1.5" stroke-linecap="square"/>
                </svg>
            {:else}
                <svg on:click="{() => {burgerMenuActive = false}}" class="mr-4"
                     width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#0171C3"/>
                </svg>
            {/if}

        </div>
        <div class="bg-textLight {burgerMenuActive ? '' : 'hidden'}">
            <div class="flex flex-col my-16">
                <MenuItem section="{PageSections.Home}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
                <MenuItem section="{PageSections.Products}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
                <MenuItem section="{PageSections.Services}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
                <MenuItem section="{PageSections.AboutUs}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
                <MenuItem section="{PageSections.Contact}" activeSection="{activeSection}" onClick="{onMenuItemClick}"/>
            </div>
            <div class="flex justify-center mb-16">
                <div class="text-blue">
                    <span class="cursor-pointer {$english ? 'font-bold' : ''}"
                          on:click={() => english.set(true)}>
                        EN
                    </span>
                        |
                        <span class="cursor-pointer {$english ? '' : 'font-bold'}"
                              on:click={() => english.set(false)}>
                        RO
                    </span>
                </div>
            </div>
        </div>
    </nav>

    <slot />

    <footer class="bg-footerBg text-footerText px-4 sm:px-32">
        <div class="flex flex-col sm:flex-row justify-between pt-16 pb-8 border-b border-footerSeparator">
            <div class="flex flex-col sm:justify-center sm:items-center">
                <div class="h-[58px] w-auto rounded-[8px] overflow-hidden mb-8">
                    <img class="mr-auto object-contain h-full" src="/logo.png" alt="Insight Trading Logo">
                </div>
                <div>
                <span class="cursor-pointer {$english ? 'font-bold' : ''}"
                      on:click={() => english.set(true)}>
                    EN
                </span>
                    |
                    <span class="cursor-pointer {$english ? '' : 'font-bold'}"
                          on:click={() => english.set(false)}>
                    RO
                </span>
                </div>
            </div>
            <div class="text-footerText max-sm:mt-4 sm:w-[645px] sm:pl-16">
                <div class="font-[700] text-[16px] leading-[20px] mb-4">
                    {#if $english}
                        About us
                    {:else}
                        Despre noi
                    {/if}
                </div>
                <div class="font-[400] text-[16px] leading-[20px]">
                    {#if $english}
                        We are active participants in the cardiology medical device industry, with a team of sales and support experts who bring together over 15 years of experience in the field.
                    {:else}
                        Suntem participanți activi în industria dispozitivelor medicale pentru cardiologie cu o echipă formată din experți în vânzări și suport ce adună peste 15 ani de experiență în domeniu.
                    {/if}
                </div>
            </div>
            <div class="max-sm:mt-4">
                <div class="mb-2">Contact</div>
                <div class="flex mb-2">
                    <img class="mr-6" src="/mail.svg">
                    office@insight-trading.ro
                </div>
                <div class="flex mb-2">
                    <img class="mr-6" src="/call.svg">
                    +4 021 323 3049
                </div>
                <div class="flex mb-2">
                    <img class="mr-6" src="/address.svg">
                    Str. Dr. Maximilian Popper nr. 23, ap. 11,<br>
                    Sector 3, Bucuresti
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center mt-8 pb-12">
            <a href="/Termeni%20si%20conditii%20Insight%20Trading%20SRL.pdf" target="_blank">
                {#if $english}
                    Terms and conditions
                {:else}
                    Termeni și condiții
                {/if}
            </a>
            <a href="/Privacy%20Policy%20Insight%20trading%20%5Bbilingv%5D%202023.pdf" target="_blank">
                {#if $english}
                    Privacy policy
                {:else}
                    Politică de confidențialitate
                {/if}
            </a>
        </div>
    </footer>
</div>

{#if $overlayActive}
    <ImageViewer/>
{/if}