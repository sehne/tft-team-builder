import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import ArrowUpBoldIcon from 'vue-material-design-icons/ArrowUpBold.vue';
import ArrowDownBoldIcon from 'vue-material-design-icons/ArrowDownBold.vue';

Vue.config.productionTip = false

Vue.component('arrow-up-bold-icon', ArrowUpBoldIcon);
Vue.component('arrow-down-bold-icon', ArrowDownBoldIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
