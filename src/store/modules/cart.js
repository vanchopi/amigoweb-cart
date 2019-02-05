import shop from '../../api/shop'


	const state = {		
		cart:[]
	}

	const getters = {
		getItems(state, getters, rootState){
			return state.cart.map(cartItem => {
				const product = rootState.storage.products.find(product => product.id === cartItem.id)

				return{
					id: product.id,
					title: product.title,
					price: product.price,
					quantity: cartItem.quantity
				}
			})
		}
	}

	const actions = {
		addProductToCart({state, getters, commit, rootState, rootGetters}, product){
			if (product.inventory > 0){
								
				const cartItem = state.cart.find(item => item.id === product.id)
				if(!cartItem){
					commit('ADD_ITEM', product.id)
				}else{
					commit('incrementItemQuantity', cartItem)
					
				}
				commit('storage/REMOVE_ITEM', product, {root: true})
			}
		},

		delFromCart({state, getters, commit, rootState, rootGetters}, cartItem){
			if (cartItem.quantity > 0){
				console.log(cartItem.id);
				const productItem = state.cart.find(item => item.id === cartItem.id)
				console.log(productItem.id)
				if(!productItem){
					//
				}else{					
					commit('REMOVE_ITEM', productItem);
					
				}
				commit('storage/ADD_ITEM', cartItem, {root: true})
			}
		}
	}
	
	const mutations = {

		ADD_ITEM(state, productId){
			state.cart.push({
				id: productId,
				quantity: 1
			})
		},

		incrementItemQuantity(state,cartItem){
			cartItem.quantity++
		},

		REMOVE_ITEM(state,cartItem){
			cartItem.quantity--
		}
	}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}