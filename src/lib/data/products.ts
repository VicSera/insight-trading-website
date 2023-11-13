export interface Product {
    id: string;
    producer: string;
    name: string;
    descriptionRo: string;
    descriptionEn: string;
    categoryRo: string[];
    categoryEn: string[];
    producerLink: string;
    brochureLink: string;
    imagePaths: string[];
    mainImage?: string;
}

export const products: Product[] = [
    // TIDI
    {
        id: 'zero-gravity',
        producer: 'TIDI',
        name: 'Zero-Gravity®',
        descriptionRo: 'Sistem suspendat de protectie impotriva radiatiilor ionizante',
        descriptionEn: 'Suspended X-Ray radiation protection system',
        categoryRo: ['echipamente protectie X-Ray'],
        categoryEn: ['X-Ray protection devices'],
        producerLink: 'https://www.tidiproducts.com',
        brochureLink: 'https://www.tidiproducts.com/product-listing/zero-gravity-drape-wrap',
        imagePaths: [
            'ZeroGravity/ZG Picture1.jpg',
            'ZeroGravity/ZG Picture2.jpg',
            'ZeroGravity/ZG Picture3.jpg',
        ]
    },

    // GEM Italy
    {
        id: 'glubran-2',
        producer: 'GEM Italy',
        name: 'GLUBRAN®2',
        descriptionRo: 'Adeziv chirurgical sintetic, lichid embolizare vasculara',
        descriptionEn: 'Synthetic surgical glue, liquid embolization agent',
        categoryRo: ['interventii vasculare periferice', 'chirurgie'],
        categoryEn: ['peripheral vascular interventions', 'surgery'],
        producerLink: 'https://www.gemitaly.it/en/',
        brochureLink: 'https://www.gemitaly.it/en/products/glubran-2/',
        imagePaths: [
            'Glubran2/about-2.jpg',
            'Glubran2/Glubran2 0.5ml.jpg',
            'Glubran2/Glubran2 0.25ml.jpg',
            'Glubran2/Glubran2 1ml.jpg',
            'Glubran2/glubran_2.png',
        ],
        mainImage: 'Glubran2/main.png',
    },
    {
        id: 'glubran-tiss-2',
        producer: 'GEM Italy',
        name: 'GLUBRAN®TISS 2',
        descriptionRo: 'Adeziv chirurgical sintetic',
        descriptionEn: 'Synthetic surgical glue',
        categoryRo: ['chirurgie', 'trauma'],
        categoryEn: ['surgery', 'trauma'],
        producerLink: 'https://www.gemitaly.it/en/',
        brochureLink: 'https://www.gemitaly.it/en/products/glubran-tiss-2/',
        imagePaths: [
            'Glubran2Tiss/glubran-tiss-2-box-05ml_250.png',
            'Glubran2Tiss/Picture1.png',
        ]
    },
    {
        id: 'glutack',
        producer: 'GEM Italy',
        name: 'GLUTACK®',
        descriptionRo: 'Sistem atraumatic de fixare a plasei, laparoscopic ',
        descriptionEn: 'Atraumatic laparoscopic mesh fixation system',
        categoryRo: ['interventii laparoscopice'],
        categoryEn: ['laparoscopic interventions'],
        producerLink: 'https://www.gemitaly.it/en/',
        brochureLink: 'https://www.gemitaly.it/en/products/glutack/',
        imagePaths: [
            'Glutack/Glutack.jpg',
            'Glutack/Glutack2.jpg',
            'Glutack/Glutack3.jpg'
        ],
        mainImage: 'Glutack/main.png',
    },
    {
        id: 'aplicatoare',
        producer: 'GEM Italy',
        name: 'APLICATOARE ADEZIV CHIRURGICAL',
        descriptionRo: 'Dispozitive de aplicare a adezivului chirurgical GLUBRAN®2',
        descriptionEn: 'Application devices for Glubran®2',
        categoryRo: ['interventii vasculare periferice', 'chirurgie'],
        categoryEn: ['peripheral vascular interventions', 'surgery'],
        producerLink: 'https://www.gemitaly.it/en/',
        brochureLink: 'https://www.gemitaly.it/en/products/application-devices/',
        imagePaths: [
            'AplicatoareGlubran2/drop.jpg',
            'AplicatoareGlubran2/lap catheter.jpg',
            'AplicatoareGlubran2/nebulizator.jpg',
            'AplicatoareGlubran2/nebulizator rigid.jpg',
            'AplicatoareGlubran2/nebulizator samll.jpg',
            'AplicatoareGlubran2/siringa 1ml.jpg',
            'AplicatoareGlubran2/tip.jpg',
        ]
    },

    // TORAY Medical Co.
    {
        id: 'inoue',
        producer: 'TORAY Medical Co.',
        name: 'Inoue Ballon Catheter',
        descriptionRo: 'Cateter cu balon dilatare mitrala (PTMC)',
        descriptionEn: 'Balloon Catheter for PTMC (Percutaneous Transvenous Mitral Commissurotomy)',
        categoryRo: ['interventii vasculare coronariene'],
        categoryEn: ['coronary vascular interventions'],
        producerLink: 'https://www.toray-medical.com/en/products/index.html',
        brochureLink: 'https://www.toray-medical.com/en/products/medical/med_0010.html',
        imagePaths: [
            'Inoue/inoue2.JPG',
            'Inoue/inoue 5.jpg',
        ]
    },

    // MERIT MEDICAL
    {
        id: 'embosphere',
        producer: 'MERIT MEDICAL',
        name: 'Embosphere',
        descriptionRo: 'Particule sferice din trisacril gelatina, pentru embolizare vasculara',
        descriptionEn: 'Spherical embolization particles,  made with trisacryl gelatin, for vascular embolization',
        categoryRo: ['interventii vasculare periferice'],
        categoryEn: ['peripheral vascular interventions'],
        producerLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/',
        brochureLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/microspheres/embosphere-microspheres/',
        imagePaths: [
            'Embosphere/Embosphere.jpg',
            'Embosphere/Embosphere brochure Biosphere Merit.jpg',
        ]
    },
    {
        id: 'hepasphere',
        producer: 'MERIT MEDICAL',
        name: 'HepaSphere™',
        descriptionRo: 'Particule incarcabile, sferice, pentru chemoembolizare hepatica locala si embolizare vasculara',
        descriptionEn: 'Spherical loadable particles, for hepatic targeted chemoembolization and vessel occlusion',
        categoryRo: ['interventii vasculare periferice'],
        categoryEn: ['peripheral vascular interventions'],
        producerLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/',
        brochureLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/hepatic-oncology/hepasphere-microspheres/?_gl=1*1d2r9xg*_up*MQ..*_ga*NTQ0MTk4MDQuMTY5NTg4ODY0OQ..*_ga_P80XFRH9XF*MTY5NTg4ODY0Ny4xLjEuMTY5NTg4ODY1MC4wLjAuMA..',
        imagePaths: [
            'Hepasphere/Hepasphere.jpg',
            'Hepasphere/Hepashpere with Doxo.jpg',
        ]
    },
    {
        id: 'bearing',
        producer: 'MERIT MEDICAL',
        name: 'Bearing nsPVA®',
        descriptionRo: 'Fulgi din PVA (polivinil alcool) pentru embolizare vasculara',
        descriptionEn: 'nsPVA embolisation particles for vascular occlusion',
        categoryRo: ['interventii vasculare periferice'],
        categoryEn: ['peripheral vascular interventions'],
        producerLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/',
        brochureLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/embolization-particles/bearing-nspva-embolization-particles/?_gl=1*1d2r9xg*_up*MQ..*_ga*NTQ0MTk4MDQuMTY5NTg4ODY0OQ..*_ga_P80XFRH9XF*MTY5NTg4ODY0Ny4xLjEuMTY5NTg4ODY1MC4wLjAuMA..',
        imagePaths: [
            'Bearing/Bearing color.jpg',
            'Bearing/Bearing labels.jpg',
        ]
    },
    {
        id: 'embocube',
        producer: 'MERIT MEDICAL',
        name: 'EmboCube®',
        descriptionRo: 'Cuburi preformate din gelatina resorbabila pentru embolizarea tumorilor hipervasculare',
        descriptionEn: 'Gelatin foam uniformly cut for vascular embolization',
        categoryRo: ['interventii vasculare periferice'],
        categoryEn: ['peripheral vascular interventions'],
        producerLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/',
        brochureLink: 'https://www.merit.com/peripheral-intervention/embolotherapy/embolization-gelatin/embocube-embolization-gelatin/?_gl=1*1d2r9xg*_up*MQ..*_ga*NTQ0MTk4MDQuMTY5NTg4ODY0OQ..*_ga_P80XFRH9XF*MTY5NTg4ODY0Ny4xLjEuMTY5NTg4ODY1MC4wLjAuMA..',
        imagePaths: [
            'EmboCube/EmboCube.jpg',
            'EmboCube/EmboCube2.jpg',
        ],
        mainImage: 'EmboCube/main.png',
    },
    {
        id: 'clarivein',
        producer: 'MERIT MEDICAL',
        name: 'ClariVein®',
        descriptionRo: 'Cateter de perfuzie pentru ocluzia venelor incompetente la pacientii cu reflux venos superficial, cu dublă acțiune – mecanică și chimică',
        descriptionEn: 'Specialty infusion catheter for the occlusion of incompetent veins in patients with superficial venous reflux',
        categoryRo: ['interventii vasculare periferice'],
        categoryEn: ['peripheral vascular interventions'],
        producerLink: 'https://clarivein.com/',
        brochureLink: 'https://clarivein.com/',
        imagePaths: [
            'ClariVein/ClariVein.jpg',
            'ClariVein/ClariVein tip.jpg',
        ]
    },
]