<script lang="ts">
    import '../app.css';
    import {scrollReferences} from '$lib/ScrollContext';
    import type {ScrollReferences} from '$lib/ScrollReferences';
    import {PageSections} from '$lib/PageSections';
    import MenuItem from '$lib/MenuItem.svelte';

    let y = 0;
    let activeSection: PageSections;
    let scrollRefs: ScrollReferences = {};
    scrollReferences.subscribe(refs => {
        scrollRefs = refs;
    })

    $: {
        let scrollWithOffset = y + 200;
        if (!!scrollRefs.contact && scrollRefs.contact.offsetTop < scrollWithOffset) {
            activeSection = PageSections.Contact;
        } else if (!!scrollRefs.aboutUs && scrollRefs.aboutUs.offsetTop < scrollWithOffset) {
            activeSection = PageSections.AboutUs;
        } else if (!!scrollRefs.services && scrollRefs.services.offsetTop < scrollWithOffset) {
            activeSection = PageSections.Services;
        } else if (!!scrollRefs.products && scrollRefs.products.offsetTop < scrollWithOffset) {
            activeSection = PageSections.Products;
        } else {
            activeSection = PageSections.Home;
        }
    }

    function onMenuItemClick(item: PageSections): void {
        switch (item) {
            case PageSections.Home:
                window.scrollTo(0, 0);
                return;
            case PageSections.Products:
                window.scrollTo(0, scrollRefs.products?.offsetTop ?? 0);
                return;
            case PageSections.Services:
                window.scrollTo(0, scrollRefs.services?.offsetTop ?? 0);
                return;
            case PageSections.AboutUs:
                window.scrollTo(0, scrollRefs.aboutUs?.offsetTop ?? 0);
                return;
            case PageSections.Contact:
                window.scrollTo(0, scrollRefs.contact?.offsetTop ?? 0);
                return;
        }
    }
</script>

<svelte:window bind:scrollY={y} />

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
            <strong>EN</strong>|RO
        </div>
    </div>
</nav>
<nav class="sm:hidden w-full">
    <div class="flex justify-between">
        <div class="h-[58px] w-auto">
            <img class="mr-auto object-contain h-full" src="/logo.png" alt="Insight Trading Logo">
        </div>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12.75" y1="16.25" x2="34.29" y2="16.25" stroke="#141415" stroke-width="1.5" stroke-linecap="square"/>
            <line x1="12.75" y1="23.25" x2="34.29" y2="23.25" stroke="#141415" stroke-width="1.5" stroke-linecap="square"/>
            <line x1="12.75" y1="30.25" x2="34.29" y2="30.25" stroke="#141415" stroke-width="1.5" stroke-linecap="square"/>
        </svg>

    </div>
</nav>

<slot />

<footer class="bg-footerBg text-footerText px-32">
    <div class="flex justify-between pt-16 pb-8 border-b border-footerSeparator">
        <div class="flex flex-col justify-center items-center">
            <div class="h-[58px] w-auto rounded-[8px] overflow-hidden mb-8">
                <img class="mr-auto object-contain h-full" src="/logo.png" alt="Insight Trading Logo">
            </div>
            <div>
                <strong>EN</strong>|RO
            </div>
        </div>
        <div class="text-footerText w-[645px] pl-16">
            <div class="font-[700] text-[16px] leading-[20px] mb-4">
                About us
            </div>
            <div class="font-[400] text-[16px] leading-[20px]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </div>
        </div>
        <div>
            <div class="mb-2">Contact</div>
            <div class="flex mb-2">
                <img class="mr-6" src="/mail.svg">
                example@email.com
            </div>
            <div class="flex mb-2">
                <img class="mr-6" src="/call.svg">
                +40744666666
            </div>
            <div class="flex mb-2">
                <img class="mr-6" src="/address.svg">
                str. Nume Strada nr. 99
            </div>
        </div>
    </div>

    <div class="flex justify-between items-center mt-8 pb-12">
        <div>Terms and conditions</div>
        <div>Privacy policy</div>
    </div>
</footer>