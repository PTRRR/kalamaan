<template lang="pug">
.novita
  slider(:slides='news.gallery')
</template>

<script>
import Slider from '@/components/Slider'

export default {
  components: { Slider },

  async asyncData({ $content }) {
    const news = await $content('novita').fetch()
    return {
      news,
    }
  },
}
</script>
