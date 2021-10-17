import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MoreDetail from '../views/More-detail.vue'
import BangDan from '../views/bangdan'
import Songer from '../views/songer'
import SongerDetail from '../views/songer-detail'
import PlaySong from '../views/play-song'
import dianTai from '../views/dian_tai'
import dianTaiDetail from '../views/dian-tai-detail'
import loginSearch from '../views/login_search'
import Mv from '../views/Mv'
import MvDetail from '../views/Mv_detail'
import moreDetailXq from '../views/more-detail-xq'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/more-detail',
    name: 'more',
    component: MoreDetail
  },
  {
    path: '/BangDan',
    name: 'BangDan',
    component: BangDan
  },
  {
    path: '/Songer',
    name: 'Songer',
    component: Songer
  },
  {
    path: '/SongerDetail',
    name: 'SongerDetail',
    component: SongerDetail
  },
  {
    path: '/PlaySong',
    name: 'PlaySong',
    component: PlaySong
  },
  {
    path: '/dianTai',
    name: 'dianTai',
    component: dianTai
  },
  {
    path: '/dianTaiDetail',
    name: 'dianTaiDetail',
    component: dianTaiDetail
  },
  {
    path: '/loginSearch',
    name: 'loginSearch',
    component: loginSearch
  },
  {
    path: '/Mv',
    name: 'Mv',
    component: Mv
  },
  {
    path: '/MvDetail',
    name: 'MvDetail',
    component: MvDetail
  },
  {
    path: '/moreDetailXq',
    name: 'moreDetailXq',
    component: moreDetailXq
  }
]

const router = new VueRouter({
  routes
})

export default router
