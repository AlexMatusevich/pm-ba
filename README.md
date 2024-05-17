# Documentation Project for PM and BA
Welcome to the Documentation website! This site serves as the central hub for project managers and business analytics staff to access comprehensive guides, tutorials, and resources that will help you effectively manage your projects and analyze business data using the Astro platform.

This project uses the [Starlight](https://starlight.astro.build/) template.

## Getting Started

### Run project locally
To install all dependencies, run the following command:
```bash
npm install
```
Then, start the development server by running:
```bash
npm run dev
```

you can stop the server by pressing `Ctrl + C`

## Creating a New Page
To create a new page, navigate to the `src/content/docs` directory under the pm or ba folder,
and create a new extended markdown file <filename>.mdx with the following frontmatter:

```yaml
---
    title: Page Title
---
## your imports if any
## your content here
```

Folders created under pm/knowledge-base, pm/resources, and pm/courses will be automatically added to the sidebar.

For files created under the ba folder, you need to manually add them to the sidebar by updating the astro.config.mjs file.

For more information, refer to the [Starlight documentation on the sidebar](https://starlight.astro.build/guides/sidebar/)

## Creating New Content

For more details on frontmatter, refer to the [Starlight documentation](https://starlight.astro.build/reference/frontmatter/)

Content is written in markdown. To learn more about markdown, visit the [Markdown Guide](https://www.markdownguide.org)

For additional help, refer to the [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

## Deploying the Site
AAfter adding or editing content, and you are ready to deploy the site, run the following commands in the root folder of the project:
```bash
git add .
git commit -m "your commit message"
git push origin main
```

> project will be automatically deployed
