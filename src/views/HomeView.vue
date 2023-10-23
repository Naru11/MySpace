<template>
  <ContentBase>首页</ContentBase>
  <button v-if="a" @click="transform">黑夜模式</button>
  <button class="night" v-else @click="transform">白天模式</button>
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
    const transform = (a) => {
      a.value = !a.value
    }
    return {
      a,
      transform,
    }
  }
}
</script>
<style scoped>
.night {
  background-color: black;
}
</style>
