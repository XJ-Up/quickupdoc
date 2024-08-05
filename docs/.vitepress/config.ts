import { defineConfig } from 'vitepress'
import { autoGenerateSidebar } from 'press-util'
import vite from './vite.config'

export default defineConfig({
  base: '/',
  appearance: true,
  title: 'XJ-UP Quick Upload',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }], // chrome pwa
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    }
  },

  themeConfig: {
    logo: '/logo.png',
    ignoreDeadLinks: true,
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '🎯 使用文档',
      link: '/start.md'
    }],
    sidebar: autoGenerateSidebar() as any,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/XJ-Up/quickupload'
      }
    ]
  },
  vite,
})
