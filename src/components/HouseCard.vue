<template>
  <div class="house m-2 bg-light shadow">
    <router-link :to="{name: 'HouseDetails', params: {id: house.id}}" >
      <img :src="house.imgUrl" alt="" class="w-100">
      <div class="p-3">
        <div class="text-center"><p><b>{{house.bedrooms}} Bedrooms - {{house.bathrooms}} bathrooms</b></p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    house: {
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

</style>