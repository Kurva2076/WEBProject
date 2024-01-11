import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faVk, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebookF, faVk, faTelegramPlane, faYoutube);

const userInfo = createStore({
    state() {
        return {
            author: '',
            phone: '',
            eMail: '',
            message: '',
            agreement: false
        }
    },
    mutations: {
        increment(state, payload) {
            state[payload.stateName] = payload.value;
        }
    },
    getters: {
        getAuthor(state) {
            return state.author;
        },
        getPhone(state) {
            return state.phone;
        },
        getEMail(state) {
            return state.eMail;
        },
        getMessage(state) {
            return state.message;
        },
        getAgreement(state) {
            return state.agreement;
        }
    }
});

createApp(App).use(userInfo).component('fa', FontAwesomeIcon).mount('#app');
