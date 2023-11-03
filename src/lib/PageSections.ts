export const enum PageSections {
    Home = 'Home',
    Products = 'Products',
    Services = 'Services',
    AboutUs = 'About us',
    Contact = 'Contact'
}

export function translate(section: PageSections): string {
    switch (section) {
        case PageSections.AboutUs:
            return 'Despre noi';
        case PageSections.Contact:
            return 'Contact';
        case PageSections.Home:
            return 'Acasă';
        case PageSections.Products:
            return 'Produse';
        case PageSections.Services:
            return 'Servicii';
    }
}