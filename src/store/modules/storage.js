import shop from '../../api/shop'


	const state = {		
		products:[]
	}

	const getters = {
		availableProducts (state, getters){
			return state.products.filter(product => product.inventory > 0)
		}	
	}

	const actions = {
		fetchProducts ({commit}){
			return new Promise((resolve, reject) =>{
				shop.getProducts(products =>{
			      commit('setProducts', products);
			      resolve()
			    })
		    })
		}
	}
	
	const mutations = {
		setProducts (state, products){
			state.products = products
		},	

		ADD_ITEM(state,{id}){
			const product = state.products.find(product => product.id === id)
			product.inventory++	
		},

		REMOVE_ITEM(state, {id}){
			const product = state.products.find(product => product.id === id)
			product.inventory--
		}		
	}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}