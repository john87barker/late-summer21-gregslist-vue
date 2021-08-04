<template>
  <div class="house-details-page">
    <h1>Welcome to this House's details!</h1>
    {{house.bedrooms}} - {{house.bathrooms}}
    <br>
    {{house.description}}
    <br>
    {{house.price}}
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
      car: computed(()=> AppState.activeHouse),
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