module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '奇迹健身信息技术部',
    description: '奇迹健身区域IT工作指导手册',

    home:'/',
    
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'https://github.com/wjymzh',
        repoLabel:'GitHub',
      logo: '/image/logo.png',
        navbar: [
        // NavbarItem
        {
          text: '硬件基础',
          link: '/1',
        },
        {
            text: '网络知识',
            link: '/2',
          },
          {
            text: '系统知识',
            link: '/3',
          },
    ],
    // 侧边栏
    sidebar: [
        // SidebarItem
        {
          text: '秃头笔记',
          link: '/',
        },
        {
          text:'工作概述',
          link:'/index/work'
        }
      ],
    },
  
  }