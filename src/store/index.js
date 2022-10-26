import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos.js'

// Loading Vuex
Vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules: {
        todos
    }
});