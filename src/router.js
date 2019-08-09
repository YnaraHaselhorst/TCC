import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Quem from './views/QuemSomos.vue'
import Projeto from'./views/Projeto.vue'
import Doacao from './views/Doacao.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/QuemSomos',
      name: 'Quem Somos',
      component: Quem
    },
    {
      path: '/Projeto',
      name: 'O Projeto',
      component: Projeto
    },
    {
      path: '/Doacao',
      name: 'Faça Uma Doação',
      component: Doacao
    },
  ]
})
