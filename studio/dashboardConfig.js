export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6259648f601acf4830b2c78f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-v9d1c4sn',
                  apiId: 'ba8d2058-916e-4da6-a6e7-a4fce0e9c3fd'
                },
                {
                  buildHookId: '62596490db5b6b447e0dd70e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-iuku2gra',
                  apiId: 'b733bac0-a600-4def-bff4-a3fd059ad67f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lekevoid/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-iuku2gra.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
