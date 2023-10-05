import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import addProduct from '../views/addProduct.vue'
import deleteProduct from '../views/deleteProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: "https://main--curious-gaufre-c2d3df.netlify.app/addproduct",
      name: "addProduct",
      component: addProduct,
      meta: {
        title: 'Add Product'
      },
      // beforeEnter: (to, from, next) => {
      //   const userStore = useUserStore();
      //   if (userStore.email === 'jan@gmail.com') {
      //     // User is allowed to access the route
      //     next();
      //   } else {
      //     // User is not allowed, redirect to another route
      //     next({ name: 'Login' });
      //   }
      // }
    },
    {
      path: "https://main--curious-gaufre-c2d3df.netlify.app/delete",
      name: "deleteProduct",
      component: deleteProduct,
      meta: {
        title: 'Delete Product'
      },
      // beforeEnter: (to, from, next) => {
      //   const userStore = useUserStore();
      //   if (userStore.email === 'jan@gmail.com') {
      //     // User is allowed to access the route
      //     next();
      //   } else {
      //     // User is not allowed, redirect to another route
      //     next({ name: 'Login' });
      //   }
      // }
    },
  ]
})

export default router
