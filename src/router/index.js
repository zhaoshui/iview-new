import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import memberinfo from '@/components/memberinfo'
import keyaccount from '@/components/keyaccount'
import returndata from '@/components/returndata'
import smsanage from '@/components/smsanage'
import memberset from '@/components/memberset'
import stareport from '@/components/stareport'
import systemset from '@/components/systemset'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/memberinfo', name: 'memberinfo', component: memberinfo},
    {path: '/keyaccount', name: 'keyaccount', component: keyaccount},
    {path: '/returndata', name: 'returndata', component: returndata},
    {path: '/smsanage', name: 'smsanage', component: smsanage},
    {path: '/memberset', name: 'memberset', component: memberset},
    {path: '/stareport', name: 'stareport', component: stareport},
    {path: '/systemset', name: 'systemset', component: systemset}
  ]
})
