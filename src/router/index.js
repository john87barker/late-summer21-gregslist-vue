import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Cars from '../pages/Cars.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import Houses from '../pages/Houses.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Cars
  }, {
    path: '/houses',
    name: 'House',
    component: Houses
  },
  {
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    // required param ':id'
    path: '/house-details/',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
