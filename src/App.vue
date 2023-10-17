<script setup>

import { RouterView } from 'vue-router'

import boxheader from './views/boxheader.vue'
//import jumbo from './views/jumbo.vue'
</script>


<template>

  <div class="container">
  <boxheader> </boxheader>
  
  <RouterView/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>