import Vue from 'vue';
import HelloComponent from './components/hello.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
let app = new Vue({
    el: '#app',
    components: {'hello': HelloComponent},
});
