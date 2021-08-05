<template>
  <div class="vh-100 img"></div>

</template>

<script>
// import { computed, onMounted } from '@vue/runtime-core'
// import {AppState} from '../AppState.js'

export default {
  name: 'Home',
  setup(){
    
  },

}
</script>

<style lang="scss" scoped>
.img{
  max-height: 90vh;
  background-image: url("https://images.unsplash.com/photo-1574079771556-f09a65db11e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1850&q=80");
  background-size: contain ;
}
</style>