// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Nguyễn Minh Châu',
    tagline: 'Frontend Developer (Website, Mobile app)',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://github.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/NguyenMinhChau/myBlog/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    // themes: ['@docusaurus/theme-search-algolia'],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Nguyễn Minh Châu',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo_nmc.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        label: 'Linkedin',
                        href: 'https://www.linkedin.com/in/nguyen-minh-chau-87184320b/',
                        position: 'right',
                    },
                    {
                        label: 'Github',
                        href: 'https://github.com/NguyenMinhChau',
                        position: 'right',
                    },
                    {
                        label: 'Facebook',
                        href: 'https://www.facebook.com/nguyenminhchau2001',
                        position: 'right',
                    },
                    {
                        label: 'Phone',
                        href: 'tel:0398365404',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `© 2023 - Nguyễn Minh Châu • Frontend Developer`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: '6G0VXWTIVZ',
                apiKey: 'd0af2e03bb395e3cf246cac379dc13b4',
                indexName: 'frontend_developer',
                contextualSearch: true,
                externalUrlRegex: 'external\\.com|domain\\.com',
                replaceSearchResultPathname: {
                    from: '/docs/',
                    to: '/',
                },
                searchParameters: {
                    // search page docs
                    // https://www.algolia.com/doc/api-reference/api-parameters/
                },
                searchPagePath: 'search',
            },
        }),
};

module.exports = config;
