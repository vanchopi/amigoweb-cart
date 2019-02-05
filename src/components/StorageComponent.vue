<template>  
  <div>
    <h1>Shop storage</h1>
    <div v-if="loading">
      <span>loading...</span>
    </div>
    <ul v-else>
      <li v-for="product in products"> {{product.title}}: ${{product.price}} | {{product.inventory}}  <button @click="addProductToCart(product)">Add to cart</button></li>

    </ul>
  </div>
</template>

<script type="text/javascript">

import {mapState, mapActions} from 'vuex'

export default {

  data(){
    return{
      loading: false
    }
  },  
  
  computed: mapState({
    products: state => state.storage.products
  }),

  methods: mapActions('cart',[
      'addProductToCart'
  ]),
  /*computed:{
    products() {
      return this.$store.getters.availableProducts
    }
  },
  methods:{
    addProductToCart (product){
      this.$store.dispatch('addProductToCart', product);
    }
  },*/
  created(){
    this.loading = true;
    this.$store.dispatch('storage/fetchProducts')
         .then(() => this.loading = false)
  }
}
</script>
<style type="text/css" scoped>
</style>


