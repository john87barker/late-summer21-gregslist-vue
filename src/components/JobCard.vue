<template>
  <div class="job m-2 bg-light shadow grow">
    <router-link :to="{name: 'JobDetails', params: {id: job.id}}" >
      <img :src="job.imgUrl" alt="" class="w-100">
      <div class="p-3 pt-1">
        <div class="text-center"><p><b>{{job.title}} - {{job.company}} </b></p>
        </div>
        <div> {{job.description}}</div>
        <div> {{job.rate}} for {{job.hours}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup(){
    return{}
  }
}
</script>

<style lang="scss" scoped>


.grow { 
transition: all .2s ease-in-out; 
}

.grow:hover { 
transform: scale(1.1); 
}
</style>