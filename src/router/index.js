import Vue from 'vue'
import Router from 'vue-router'
import UrlShortener from '@/components/UrlShortener'
import ShorternUrlRedirect from '@/components/ShorternUrlRedirect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shortenUrl',
      name: 'UrlShortener',
      component: UrlShortener
    },
    {
      path: '/:urlCode',
      name: 'ShorternUrlRedirect',
      component: ShorternUrlRedirect
    }
  ]
})
