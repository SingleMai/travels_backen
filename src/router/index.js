import Vue from 'vue'
import Router from 'vue-router'
// 异步加载组件
<<<<<<< HEAD
const Login = resolve => { import('components/Login').then(module => { resolve(module) }) }
const Index = resolve => { import('components/Index').then(module => { resolve(module) }) }
const Home = resolve => { import('components/Home/Home').then(module => { resolve(module) }) }
const MSearch = resolve => { import('components/Home/src/MSearch').then(module => { resolve(module) }) }
const Chat = resolve => { import('components/Chat/Chat').then(module => { resolve(module) }) }
const Chating = resolve => { import('components/Chat/src/Chating').then(module => { resolve(module) }) }
const Myself = resolve => { import('components/Myself/Myself').then(module => { resolve(module) }) }
const UserHome = resolve => { import('components/Myself/src/UserHome').then(module => { resolve(module) }) }
const UserEdit = resolve => { import('components/Myself/src/UserEdit').then(module => { resolve(module) }) }
const UserShop = resolve => { import('components/Myself/src/UserShop').then(module => { resolve(module) }) }
const UserShopEdit = resolve => { import('components/Myself/src/UserShopEdit').then(module => { resolve(module) }) }
const UserBuy = resolve => { import('components/Myself/src/UserBuy').then(module => { resolve(module) }) }
const UserSell = resolve => { import('components/Myself/src/UserSell').then(module => { resolve(module) }) }
const UserTravels = resolve => { import('components/Myself/src/UserTravels').then(module => { resolve(module) }) }
const UserLikes = resolve => { import('components/Myself/src/UserLikes').then(module => { resolve(module) }) }
const UserPurse = resolve => { import('components/Myself/src/UserPurse').then(module => { resolve(module) }) }
const Travels = resolve => { import('components/Travels/Travels').then(module => { resolve(module) }) }
const TravelsCreate = resolve => { import('components/Travels/src/TravelsCreate').then(module => { resolve(module) }) }
const Servies = resolve => { import('components/Servies/Servies').then(module => { resolve(module) }) }
const QueryServies = resolve => { import('components/Servies/src/QueryServies').then(module => { resolve(module) }) }
const ServiesBook = resolve => { import('components/Servies/src/ServiesBook').then(module => { resolve(module) }) }
const ServiesPay = resolve => { import('components/Servies/src/ServiesPay').then(module => { resolve(module) }) }
=======
const Index = resolve => { import('components/Index').then(module => { resolve(module) }) }
const Login = resolve => { import('components/Login').then(module => { resolve(module) }) }
const Users = resolve => { import('components/Users').then(module => { resolve(module) }) }
const Carousel = resolve => { import('components/Carousel').then(module => { resolve(module) }) }
const Travels = resolve => { import('components/Travels').then(module => { resolve(module) }) }
const Servers = resolve => { import('components/Servers').then(module => { resolve(module) }) }
const Orders = resolve => { import('components/Orders').then(module => { resolve(module) }) }
const Validate = resolve => { import('components/Validate').then(module => { resolve(module) }) }
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
<<<<<<< HEAD
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          name: 'home',
          path: 'home',
          component: Home
        }, {
          name: 'travels',
          path: 'travels',
          component: Travels
        }, {
          name: 'chat',
          path: 'chat',
          component: Chat
        }, {
          name: 'myself',
          path: 'myself',
          component: Myself
        }
      ]
    }, {
      name: 'Search',
      path: '/search',
      component: MSearch
    }, {
      name: 'Servies',
      path: '/servies/:id',
      component: Servies
    }, {
      name: 'ServiesBook',
      path: '/servies/:id/book',
      component: ServiesBook
    }, {
      name: 'ServiesPay',
      path: '/servies/:id/pay',
      component: ServiesPay
    }, {
      name: 'QueryServies',
      path: '/servies/query/:query',
      component: QueryServies
    }, {
      name: 'CreateTravels',
      path: '/travels/create',
      component: TravelsCreate
    }, {
      name: 'UserHome',
      path: '/user/:id',
      component: UserHome
    }, {
      name: 'UserEdit',
      path: '/user/:id/edit',
      component: UserEdit
    }, {
      name: 'UserBuy',
      path: '/user/:id/buy',
      component: UserBuy
    }, {
      name: 'UserSell',
      path: '/user/:id/sell',
      component: UserSell
    }, {
      name: 'UserTravels',
      path: '/user/:id/travels',
      component: UserTravels
    }, {
      name: 'UserLikes',
      path: '/user/:id/likes',
      component: UserLikes
    }, {
      name: 'UserShop',
      path: '/user/:id/shop',
      component: UserShop
    }, {
      name: 'UserShopEdit',
      path: '/user/:id/shop/edit',
      component: UserShopEdit
    }, {
      name: 'UserPurse',
      path: '/user/:id/purse',
      component: UserPurse
    }, {
      name: 'Chating',
      path: '/chat/:id',
      component: Chating
=======
    }, {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/carousel',
          name: 'Carousel',
          component: Carousel
        },
        {
          path: '/users',
          name: 'Users',
          component: Users
        },
        {
          path: '/servers',
          name: 'Servers',
          component: Servers
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders
        },
        {
          path: '/travels',
          name: 'Travels',
          component: Travels
        },
        {
          path: '/validate',
          name: 'Validate',
          component: Validate
        }
      ]
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
    }
  ]
})
