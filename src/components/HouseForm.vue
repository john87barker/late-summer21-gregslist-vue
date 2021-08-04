<template>
  <div class="row bg-success">
          <div class="col mt-5">
              <h1 class="text-center mb-4">- - -Houses- - -</h1>
              <form class="d-flex justify-content-around" @submit.prevent="createHouse">
                  <div class="form-group m-1">
                      <label for="bedrooms">Bedrooms</label>
                      <input 
                      type="text" 
                      name="bedrooms" 
                      v-model="state.newHouse.bedrooms" 
                      class="form-control" 
                      placeholder="Bedrooms..."        
                      required
                      />
                  </div>
                  <div class="form-group m-1">
                      <label for="bathrooms">Bathrooms</label>
                      <input 
                      type="text" 
                      name="bathrooms" 
                      v-model="state.newHouse.bathrooms"
                      class="form-control" 
                      placeholder="Bathrooms..." 
                      required
                      />
                  </div>
                  <div class="form-group m-1">
                      <label for="year">Year Built</label>
                      <input 
                      type="number" 
                      name="year" 
                      v-model="state.newHouse.year"
                      class="form-control" 
                      placeholder="year..." 
                      required
                      min="0">
                  </div>
                  <div class="form-group m-1">
                      <label for="price">Price</label>
                      <input 
                      type="number" 
                      name="price" 
                      v-model="state.newHouse.price"
                      class="form-control" 
                      placeholder="Price..."
                      required min="1">
                  </div>
                  <div class="form-group m-1">
                      <label for="levels">Levels</label>
                      <input 
                      type="number" 
                      name="levels" 
                      v-model="state.newHouse.levels"
                      class="form-control" 
                      placeholder="levels..." 
                      required min="1">
                  </div>
                  <div class="form-group m-1">
                      <label for="imgUrl">Image Url</label>
                      <input 
                      type="text" 
                      name="imgUrl" 
                      v-model="state.newHouse.imgUrl" 
                      class="form-control" placeholder="Url...">
                  </div>
                  <div class="form-group m-1">
                      <label for="description">Description</label>
                      <input 
                      type="text" 
                      name="description" 
                      v-model="state.newHouse.description" 
                      class="form-control"
                      placeholder="Description..." 
                      maxlength="240">
                  </div>
                  <div class="d-flex align-items-center">
                      <button type="submit" class="btn btn-outline-primary">Add</button>
                  </div>
              </form>
          </div>
      </div>
</template>

<script>
import{ reactive } from '@vue/reactivity'
import {housesService} from '../services/HousesService'
import { useRouter } from 'vue-router'

export default {
  setup(){
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createHouse(){
        try {
          const newId = await housesService.createHouse(state.newHouse)
          state.newHouse = {}
          router.push({name: 'HouseDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  
}
</script>