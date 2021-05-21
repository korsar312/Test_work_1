import Vue from 'vue';
import VueRouter  from 'vue-router';

import Main from "../pages/Main";
import AboutMe from "../pages/AboutMe";
import AboutImg from "../pages/AboutImg";


Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'main', component: Main },
    { path: '/aboutMe', name: 'aboutMe', component: AboutMe },
    { path: '/img:id', name: 'aboutImg', component: AboutImg },
    { path: '*', redirect: {name: 'main'} },
]

export const router = new VueRouter({
    routes
})




