import { Helmet } from 'react-helmet-async'

export default function SEO({
    title = "PARVOZ Online Academy - Milliy Sertifikat va Attestatsiya",
    description = "PARVOZ Online Academy - Milliy sertifikat va attestatsiya imtihonlariga kafolatli tayyorgarlik. 100% natija kafolati. Barcha fanlar bo'yicha professional o'qituvchilar. Narx: 100,000 - 200,000 so'm.",
    keywords = "milliy sertifikat, attestatsiya, online ta'lim, o'qituvchilar, imtihon tayyorgarlik, PARVOZ, O'zbekiston, ona tili, matematika, ingliz tili",
    image = "/favicon.svg",
    url = "https://parvoz-academy.uz",
    type = "website"
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "PARVOZ Online Academy",
        "description": description,
        "url": url,
        "logo": `${url}/favicon.svg`,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "UZ"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+998505007613",
            "contactType": "customer service",
            "availableLanguage": ["uz", "ru"]
        },
        "sameAs": [
            "https://t.me/parvozacademy",
            "https://t.me/PARVOZONLINE"
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "Milliy Sertifikat kursi",
                "price": "200000",
                "priceCurrency": "UZS",
                "description": "Milliy sertifikat imtihoniga tayyorgarlik kursi"
            },
            {
                "@type": "Offer",
                "name": "Attestatsiya kursi",
                "price": "100000",
                "priceCurrency": "UZS",
                "description": "O'qituvchilar attestatsiya imtihoniga tayyorgarlik kursi"
            }
        ]
    }

    return (
        <Helmet>
            {/* Basic Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}${image}`} />
            <meta property="og:locale" content="uz_UZ" />
            <meta property="og:site_name" content="PARVOZ Online Academy" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}${image}`} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Uzbek" />
            <meta name="author" content="PARVOZ Online Academy" />
            <meta name="theme-color" content="#6C3CE1" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    )
}
