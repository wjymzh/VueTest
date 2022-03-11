export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "奇迹健身信息技术部",
  "description": "奇迹健身区域IT工作指导手册",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
