import Vue from 'vue';
import { Carousel, CarouselItem, Popover } from 'element-ui';
import App from './App.vue';
import router from './router';
// import store from './store';
import MyHeader from './components/header.vue';
import MyFooter from './components/footer.vue';
import HeaderBanner from './components/header-banner.vue';

import './assets/css/base.scss';

Vue.config.productionTip = false;

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);

Vue.component(MyHeader.name, MyHeader);
Vue.component(MyFooter.name, MyFooter);
Vue.component(HeaderBanner.name, HeaderBanner);

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
