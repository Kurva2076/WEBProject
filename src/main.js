import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faVk, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebookF, faVk, faTelegramPlane, faYoutube);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
