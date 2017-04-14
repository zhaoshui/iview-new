import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import memberinfo from '@/components/memberinfo'
import keyaccount from '@/components/keyaccount'
import returndata from '@/components/returndata'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/memberinfo', name: 'memberinfo', component: memberinfo},
    {path: '/keyaccount', name: 'keyaccount', component: keyaccount},
    {path: '/returndata', name: 'returndata', component: returndata}
  ]
})
