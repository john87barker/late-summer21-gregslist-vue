<template>
  <div class="job container-fluid bg-secondary">
    <div class="row">
      <div class="col mb-2">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4 mb-5" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {jobsService } from '../services/JobsService'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'

export default {
  name: 'Job',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>

