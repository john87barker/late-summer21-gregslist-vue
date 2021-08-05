<template>
  <div class="car-details-page mt-3 col-md-6 offset-3 border border-secondary">
    <div class="text-center">
    <h1>Welcome to the car details</h1>
   <h3> {{car.make}} - {{car.model}}</h3>
    <br>
    {{car.description}}
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-danger m-3 " @click="destroy">Delete</button>
    </div>
  </div>
</template>

 
<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await carsService.getCarById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      car: computed(()=> AppState.activeCar),
      async destroy(){
        try {
          await carsService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>