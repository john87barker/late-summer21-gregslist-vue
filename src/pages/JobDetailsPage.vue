<template>
  <div class="job-details-page text-center ">
    <h2 class="m-4">Job:</h2>
    <div class="row m-5 b-1">
     
      <div class="col-md-6 offset-3 border border-secondary" >
        <h3 class="mt-5">
        {{jobs.jobTitle}}  - {{jobs.company}} 
        </h3>
        <br>
        {{jobs.description}}
        <br>
        <h5 class="pt-3">
        Pay per Hour: ${{jobs.rate}}
        </h5>
        <div>
        <button class="btn btn-danger m-3" @click="destroy">Delete</button>
        </div>
      </div>
    </div>  
    <h1 class="font-italic mt-5">If you are interested in this job please find it on LinkedIn.</h1>
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
      jobs: computed(()=> AppState.activeJob),
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