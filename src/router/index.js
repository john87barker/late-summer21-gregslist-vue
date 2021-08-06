import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Cars from '../pages/Cars.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import Houses from '../pages/Houses.vue'
import Home from '../pages/Home.vue'
import Jobs from '../pages/Jobs.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/cars',
    name: 'Car',
    component: Cars
  }, {
    path: '/houses',
    name: 'House',
    component: Houses
  },{
    path: '/jobs',
    name: 'Job',
    component: Jobs
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    // required param ':id'
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },{
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
