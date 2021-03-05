export default {
  widgets: [
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
                  buildHookId: '60426b97970aba41059f510f',
                  title: 'Sanity Studio',
                  name: 'demo-tprof-studio',
                  apiId: '956c54cc-c776-460e-8d09-2fa0663b4894'
                },
                {
                  buildHookId: '60426b96ec518b2e2d3f808d',
                  title: 'Blog Website',
                  name: 'demo-tprof',
                  apiId: '89b59e31-6c99-44ad-866b-eaaa39c1083f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tecnoprof/demo-tprof',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://demo-tprof.netlify.app', category: 'apps'}
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
