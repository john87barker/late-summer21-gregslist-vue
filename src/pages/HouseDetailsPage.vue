<template>
  <div class="house-details-page text-center ">
    <h2 class="m-4">The home you selected:</h2>
    <div class="row m-5">
      <div class="col-md-6 border border-secondary ">
        <img :src="house.imgUrl" alt="house" class="my-3 img-fluid">
      </div>
      <div class="col-md-6 border border-secondary">
        <h3 class="mt-5">
        {{house.bedrooms}} Bedrooms - {{house.bathrooms}} Bathrooms
        </h3>
        <br>
        {{house.description}}
        <br>
        <h5 class="pt-3">
        Price: ${{house.price}}
        </h5>
        <div>
        <button class="btn btn-danger m-3" @click="destroy">Delete</button>
        </div>
      </div>
    </div>  
    <h1 class="font-italic mt-5">Is this your future home?</h1>
  </div>
</template>

<script>
import {computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState'
import { housesService } from '../services/HousesService'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async() => {
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      house: computed(()=> AppState.activeHouse),
      async destroy(){
        try {
          await housesService.destroy(route.params.id)
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>