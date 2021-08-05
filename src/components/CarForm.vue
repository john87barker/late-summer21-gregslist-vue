<template>
  <div class="car-form bg-secondary">
    <h1 class="text-center mt-3">Vehicles</h1>
    <form class="d-flex mx-3" @submit.prevent="createCar">
      <div class="form-group mx-1 ">
        <label for="make"></label>
        <input
          type="text"
          name="make"
          v-model="state.newCar.make"
          class="form-control"
          placeholder="Make..."
          required
        />
      </div>
      <div class="form-group mx-1">
        <label for="model"></label>
        <input
          type="text"
          name="model"
          v-model="state.newCar.model"
          class="form-control"
          placeholder="Model..."
          required
        />
      </div>
      <div class="form-group mx-1">
        <label for="year"></label>
        <input
          type="number"
          name="year"
          v-model="state.newCar.year"
          class="form-control"
          placeholder="Year..."
          required
          min="1950"
          max="2021"
        />
      </div>
      <div class="form-group mx-1">
        <label for="price"></label>
        <input
          type="number"
          name="price"
          v-model="state.newCar.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
      </div>
      <div class="form-group mx-1">
        <label for="imgUrl"></label>
        <input
          type="text"
          name="imgUrl"
          v-model="state.newCar.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="form-group mx-1">
        <label for="description"></label>
        <input
          type="text"
          name="description"
          v-model="state.newCar.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center pt-2">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
    </form>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { carsService } from '../services/CarsService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newCar: {}
    })
    return {
      state,
      async createCar(){
        try {
          const newId = await carsService.createCar(state.newCar)
          // NOTE clears the form
          debugger
          state.newCar = {}
          router.push({name: 'CarDetails', params: {id: newId}})
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