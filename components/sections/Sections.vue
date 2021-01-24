<template lang="pug">
  .sections
    .sections__item(
      v-for="(section, index) in sections"
      :key="index"
      :is="getSectionName(section)"
      :data="section"
    )
</template>

<script>
import SectionText from './SectionText'
import SectionGallery from './SectionGallery'
import SectionImage from './SectionImage'

export default {
  components: { SectionText, SectionGallery, SectionImage },
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getSectionName({ type }) {
      return `section-${type}`
    },
  },
}
</script>

<style lang="scss">
.sections {
  &__item {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
