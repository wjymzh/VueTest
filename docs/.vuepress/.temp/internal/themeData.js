export const themeData = {
  "repo": "https://github.com/wjymzh",
  "repoLabel": "GitHub",
  "logo": "/image/logo.png",
  "navbar": [
    {
      "text": "硬件基础",
      "link": "/1"
    },
    {
      "text": "网络知识",
      "link": "/2"
    },
    {
      "text": "系统知识",
      "link": "/3"
    }
  ],
  "sidebar": [
    {
      "text": "秃头笔记",
      "link": "/"
    },
    {
      "text": "工作概述",
      "link": "/index/work"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
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
