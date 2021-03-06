import Vue from 'vue';
import Vuex from 'vuex';
import headline from "./modules/headline";
import system from "./modules/system";
import app from './modules/app';
import middlewares from './middlewares';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    modules: {//业务模块
        headline,
        system,
        app
    },
    strict: debug,
    middlewares
})