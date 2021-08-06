<template>
  <div class="row bg-secondary">
          <div class="col mt-5">
              <h1 class="text-center mb-4">
                <div>Jobs</div>
                </h1>
              <form class="d-flex justify-content-around pb-3" @submit.prevent="createJob">
                  <div class="form-group m-1">
                      <label for="title"></label>
                      <input 
                      type="text" 
                      name="title" 
                      v-model="state.newJob.title" 
                      class="form-control" 
                      placeholder="title..."        
                      required
                      />
                  </div>
                  <div class="form-group m-1">
                      <label for="company"></label>
                      <input 
                      type="text" 
                      name="company" 
                      v-model="state.newJob.company"
                      class="form-control" 
                      placeholder="company..." 
                      required
                      />
                  </div>
                  <div class="form-group m-1">
                      <label for="rate"></label>
                      <input 
                      type="number" 
                      name="rate" 
                      v-model="state.newJob.rate"
                      class="form-control" 
                      placeholder="rate..." 
                      required
                      min="0">
                  </div>
                  <div class="form-group m-1">
                      <label for="hours"></label>
                      <input 
                      type="number" 
                      name="hours" 
                      v-model="state.newJob.hours"
                      class="form-control" 
                      placeholder="hours..."
                      required min="1">
                  </div>
                  <div class="form-group m-1">
                      <label for="description"></label>
                      <input 
                      type="text" 
                      name="description" 
                      v-model="state.newJob.description"
                      class="form-control" 
                      placeholder="description..." 
                      required 
                      maxlength="500">
                  </div>
                  <div class="d-flex align-items-center pt-2">
                      <button type="submit" class="btn btn-outline-success">Add</button>
                  </div>
              </form>
          </div>
      </div>
</template>

<script>
import{ reactive } from '@vue/reactivity'
import {JobsService} from '../services/JobsService'
import { useRouter } from 'vue-router'

export default {
  setup(){
    const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    return {
      state,
      async createJob(){
        try {
          const newId = await JobsService.createJob(state.newJob)
          state.newJob = {}
          router.push({name: 'JobDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  
}
</script>