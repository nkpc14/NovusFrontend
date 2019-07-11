import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery'
import RegistrationForm from '../components/Registration/RegistrationForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path:'/gallery',
      name: 'Gallery',
      component:PhotoGallery
    },
    {
      path: '/regForm',
      name: 'RegistrationForm',
      component:RegistrationForm
    }
  ],
  mode:'history',
  base: process.env.BASE_URL,
})
