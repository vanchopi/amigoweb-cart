<template>  
  <div>
    <h1>Shop Cart</h1>
    <li v-for="product in products">
      {{product.title}}: ${{product.price}} - {{product.quantity}}
      <button @click="delFromCart(product)">X</button>
    </li>
  </div>
</template>

<script type="text/javascript">

import { mapGetters, mapState, mapActions } from 'vuex'

export default {

  computed: mapGetters('cart',{
      products: 'getItems'      
  }),
  methods: mapActions('cart',[
      'delFromCart'
  ]),
  
  /*products(){
    return this.$store.getters.getItems
  }*/
  
  
}
</script>
<style type="text/css" scoped>
</style>


