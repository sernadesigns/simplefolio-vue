import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { MediaQueries, CommonBands } from 'vue-media-queries';
import VueScrollReveal from 'vue-scroll-reveal';
import VueTilt from 'vue-tilt.js';
import VueScrollTo from 'vue-scrollto';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const mediaQueries = new MediaQueries({
	bands: CommonBands.Bootstrap4
});

library.add(fab, far, fas);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(mediaQueries);
Vue.use(VueScrollReveal);
Vue.use(VueTilt);
Vue.use(VueScrollTo, {
	duration: 1000,
	easing: "easeInOutQuad",
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
	render: h => h(App),
	mediaQueries: mediaQueries,
  mixins: [CommonBands.Bootstrap4.mixin]
}).$mount('#app')
