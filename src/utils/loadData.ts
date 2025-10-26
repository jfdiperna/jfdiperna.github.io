import type { Locale } from '../i18n/utils';

export interface Experience {
    position: string;
    company: string;
    employmentType: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

export interface Education {
    institution: string;
    level: string;
    title: string;
    startYear: string;
    endYear: string;
    grade?: string;
}

export interface Technology {
    name: string;
    icon: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface Link {
    label: string;
    url: string;
    displayText: string;
    download?: boolean;
}

export interface LocaleData {
    experiences: Experience[];
    education: Education[];
    technologies: Technology[];
    languages: Language[];
    links: Link[];
}

export async function loadLocaleData(locale: Locale): Promise<LocaleData> {
    const experiences = await import(`../../public/data/${locale}/experiences.json`);
    const education = await import(`../../public/data/${locale}/education.json`);
    const technologies = await import(`../../public/data/${locale}/technologies.json`);
    const languages = await import(`../../public/data/${locale}/languages.json`);
    const links = await import(`../../public/data/${locale}/links.json`);

    return {
        experiences: experiences.default,
        education: education.default,
        technologies: technologies.default,
        languages: languages.default,
        links: links.default,
    };
}
