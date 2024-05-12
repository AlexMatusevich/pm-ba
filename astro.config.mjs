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
        items: [
          {
            label: 'Knowledge areas',
            items: [
              {
                label: 'Stakeholder Analysis',
                link: 'ba/knowledge-areas/stakeholder-analysis'
              },
              {
                label: 'Requirements classification',
                link: 'ba/knowledge-areas/requirements-classification'
              },
              {
                label: 'Scope Creep, Boundaries of Scope',
                link: 'ba/knowledge-areas/score-creep'
              },
              {
                label: 'User Stories',
                link: 'ba/knowledge-areas/user-stories'
              },
              {
                label: 'Use Cases',
                link: 'ba/knowledge-areas/use-cases'
              },
              {
                label: 'API',
                link: 'ba/knowledge-areas/api'
              },
              {
                label: 'Technical writing / Creation of a knowledge base',
                items: [
                  {
                    label: 'Types of documents and knowledge bases',
                    link: 'ba/knowledge-areas/technical-writing/types-of-documents'
                  },
                  {
                    label: 'Technical writing process',
                    link: 'ba/knowledge-areas/technical-writing/technical-writing'
                  },
                  {
                    label: 'Essential tips for great knowledge base',
                    link: 'ba/knowledge-areas/technical-writing/essential-tips'
                  },
                ]
              }
            ]
          },
          {
            label: 'Books',
            link: 'ba/books'
          },
          {
            label: 'Templates',
            link: 'ba/templates'
          },
          {
            label: 'Useful links',
            link: 'ba/useful-links'
          },
          {
            label: 'Community progress',
            link: 'ba/community-progress'
          }
        ]
      },
    ],
  })]
});