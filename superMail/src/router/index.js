import VueRouter from 'vue-router';
import vue from 'vue';

vue.use(VueRouter)


const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/category',
        component: () =>
            import ('../views/Category.vue')
    },
    {
        path: '/cart',
        component: () =>
            import ('../views/Cart.vue')
    },
    {
        path: '/profile',
        component: () =>
            import ('../views/Profile.vue')
    }



]

const router = new VueRouter({

    routes

})


export default router