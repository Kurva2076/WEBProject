import App from './App.vue';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faVk, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebookF, faVk, faTelegramPlane, faYoutube);

const app = createApp(App);
const userInfo = createStore({
    state() {
        return {
            agreement: true,
            author: '',
            button: {
                disabled: false
            },
            eMail: 'asd@asd',
            message: '',
            phone: 'asd'
        }
    },
    mutations: {
        incrementValue(state, payload) {
            state[payload.stateName] = payload.value;
        },
        incrementDisabled(state, disabled) {
            state.button.disabled = disabled;
        }
    },
    getters: {
        getAgreement(state) {
            return state.agreement;
        },
        getAuthor(state) {
            return state.author;
        },
        getButtonDisabled(state) {
            return state.button.disabled;
        },
        getEMail(state) {
            return state.eMail;
        },
        getMessage(state) {
            return state.message;
        },
        getPhone(state) {
            return state.phone;
        }
    }
});

app.component(`fa`, FontAwesomeIcon).use(userInfo);
app.mount('#app');
