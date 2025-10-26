// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://jfdiperna.github.io',
    base: '/',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es', 'it'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
