import Vue from 'vue'
import Vuex from 'vuex'
import storage from './modules/storage'
import cart from './modules/cart'



Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		storage,
		cart		
	},

	state: {
	},

	getters: {			
	},

	actions: {		
	},

	mutations: {		
	}
})