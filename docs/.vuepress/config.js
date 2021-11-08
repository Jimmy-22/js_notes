module.exports = {
  title: '前端知识点总结',
  description: '作者：FerryXu',
  base: '/vue-press/', 
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  //base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  // markdown: {
  //   lineNumbers: true // 代码块显示行号
  // },
  themeConfig: {
    nav:[
      { text: '内部链接', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: '掘金', link: 'https://juejin.cn/user/4221723614936398' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/ferrytsui' },
        ]
      }        
    ],
    sidebar: {
      '/messi/': [
        // {
        //     title: '前言',
        //     collapsable: false,
        //     children: [
        //         '/vue-ebook/0.md'
        //     ]
        // },
        {
          title: '第一部分 JS相关',
          collapsable: false,
          children: [
              '/messi/1.md',
          ]
        },
        {
          title: '第二部分 VUE相关',
          collapsable: false,
          children: [
              '/messi/2.md',
          ]
        },
      ]
      },
  }
};
