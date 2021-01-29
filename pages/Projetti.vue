<template lang="pug">
.projetcs
  slider(:slides='projects.gallery')
</template>

<script>
import Slider from '@/components/Slider'

export default {
  components: { Slider },

  async asyncData({ $content }) {
    const projects = await $content('projetti').fetch()
    return {
      projects,
    }
  },
}
</script>
