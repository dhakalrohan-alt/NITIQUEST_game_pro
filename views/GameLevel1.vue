<template>
  <div class="level1-container">
    <Introduction/>
   
  </div>
</template>

<script>
import Introduction from '../src/components/level1/Introduction.vue';


export default {
  components: {
    Introduction,
    
    
  }
}
</script>

<style scoped>
.level1-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}
</style>
