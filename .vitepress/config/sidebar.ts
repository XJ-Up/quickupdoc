/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      collapsible: true,
      link: '/docs/hello',
      items: [
        { text: '详细介绍', link: '/docs/hello' },
        { text: '欢迎使用', link: '/docs/welcome' }
      ]
    }
  ]
}
