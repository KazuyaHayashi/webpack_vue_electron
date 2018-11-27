import Vue from 'vue';
import HelloComponent from './components/hello.vue';

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

let app = new Vue({
    el: '#app',
    components: {'hello': HelloComponent},
});
