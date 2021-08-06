<template>
  <div class="job-details-page text-center ">
    <h2 class="m-4">Job:</h2>
    <div class="row m-5">
      <div class="col-md-6 border border-secondary ">
        Will it be pretty?
      </div>
      <div class="col-md-6 border border-secondary" >
        <h3 class="mt-5">
        {{jobs.jobTitle}}  - {{jobs.company}} 
        </h3>
        <br>
        {{jobs.description}}
        <br>
        <h5 class="pt-3">
        Price per Hour: ${{jobs.rate}}
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
import { jobsService } from '../services/JobsService'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async() => {
      try {
        await jobsService.getJobById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      job: computed(()=> AppState.activejob),
      async destroy(){
        try {
          await jobsService.destroy(route.params.id)
          router.push({name: 'Job'})
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