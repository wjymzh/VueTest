import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-1fe058e4","/network.html",{"title":"ssss"},["/network","/network.md"]],
  ["v-8daa1a0e","/",{"title":"信息技术部秃头手册"},["/index.html","/README.md"]],
  ["v-5089315c","/index/work.html",{"title":"区域IT工作介绍"},["/index/work","/index/work.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
