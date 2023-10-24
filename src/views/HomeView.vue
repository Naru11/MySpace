<template>
  <ContentBase>首页</ContentBase>
  
</template>

<script>
// @ is an alias to /src
import ContentBase from '@/components/ContentBase.vue';
import { ref } from 'vue';
export default {
  name: 'HomeView',
  components: {
    ContentBase,
  },
  setup() {
    const a = ref(true)
    return {
      a,
    
    }
  }
}
</script>
<style scoped>
.night {
  background-color: black;
}
</style>
