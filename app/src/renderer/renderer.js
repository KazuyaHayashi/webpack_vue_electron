import Vue from 'vue';
import HelloComponent from './components/hello.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: HelloComponent}
    ]
});


let app = new Vue({
    el: '#app',
    router
});
