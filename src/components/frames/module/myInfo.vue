<template>
  <div class="module-my-info">
     <div class="roundness height100 width100 margin_auto">
        <img :src="require('assets/logo.png')" class="height100 width100" >
     </div>
  </div>
</template>

<script>
export default {
  name: 'module-my-info',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.module-my-info {
  height: 100px;
  margin-bottom: 14px;
}
.roundness {
 /* border:1px solid; */
  border-radius:100px;
}
</style>
