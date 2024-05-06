import { defineConfig, passthroughImageService } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://AlexMatusevich.github.io',
  base: 'pm-ba',
  image: {
    service: passthroughImageService(),
  },
  integrations: [starlight({
    favicon: '/favicon.ico',
    title: 'Vention Document',
    logo: {
      light: './src/assets/icons/logo-dark.svg',
      dark: './src/assets/icons/logo-light.svg',
      replacesTitle: true,
    },
    expressiveCode: {
      useStarlightDarkModeSwitch: true
    },
    pagination: false,
    customCss: ['./src/styles/index.css'],
    sidebar: [
      {
        label: "PMs knowledge base",
        items: [
          {
            label: "Knowledge areas",
            autogenerate: { directory: "pm/knowledge-areas" },
          },
          {
            label: 'Resources',
            autogenerate: { directory: "pm/resources" },
          },
          {
            label: 'Certifications/Courses',
            autogenerate: { directory: "pm/courses" },
          }
        ],
      },
      {
        label: "BAs knowledge base",
        autogenerate: { directory: "reference" },
      },
    ],
  })]
});