module.exports = {
  title: 'RoleUp Jobboard',
  tagline: 'The tagline of my site',
  url: 'https://docs.roleup.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'roleupjobboard',
  projectName: 'documentation',
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'RoleUp Jobboard',
      logo: {
        alt: 'RoleUp logo',
        src: 'img/logo.svg',
        href: 'https://roleup.com/',
        target: '_self',
      },
      links: [
        {
          href: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/roleupjobboard/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Doc',
              to: 'https://roleup.com/api/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/roleupjobboard',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} French Cactus LTD`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/roleupjobboard/documentation/edit/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
