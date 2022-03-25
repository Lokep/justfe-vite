export const themeData = {
  "logo": "https://resource.lanniuh.com/common/logo.png",
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "组件",
      "link": "/packages/"
    },
    {
      "text": "PC 组件库",
      "link": "http://pc.justfe.cn"
    },
    {
      "text": "文档中心",
      "link": "http://docs.justfe.cn"
    },
    {
      "text": "NPM 仓库",
      "link": "http://npm.justfe.cn"
    }
  ],
  "sidebarDepth": 1,
  "darkMode": false,
  "sidebar": {
    "/packages/": [
      {
        "text": "开发指南",
        "children": [
          "/packages/README.md"
        ]
      },
      {
        "text": "组件",
        "children": [
          "/packages/select/README.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
