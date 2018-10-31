import Vue from 'vue';
import router from './router';
import { createState } from './store/state';
import { createStore } from './store';
import './sass/main.scss';

new Vue({
  el: '#app',
store: createStore(createState()),  router
});
