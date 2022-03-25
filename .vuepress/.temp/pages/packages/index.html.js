export const data = {
  "key": "v-69dd9e09",
  "path": "/packages/",
  "title": "快速入门",
  "lang": "en-US",
  "frontmatter": {
    "title": "快速入门"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Intro",
      "slug": "intro",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "packages/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
