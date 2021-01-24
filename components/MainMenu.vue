<template lang="pug">
  .menu(
    :class="cssClasses"
  )
    .menu__home
      a Kalamaan

    .menu__sections
      a Chi siamo
      a Novita
      a Contatti
      a.menu--highlight Dona
</template>

<script>
export default {
  data() {
    return {
      mode: 'image',
    }
  },

  computed: {
    cssClasses() {
      return [`menu--${this.mode}`]
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.mode = window.scrollY > window.innerHeight - 33 ? 'text' : 'image'
    })
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.menu {
  font-family: $font-medium;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  a {
    display: block;
    @include regular-crop;
  }

  &--highlight {
    padding: 0.5rem;
    margin: -0.5rem 0;
    background-color: $red;
    color: $white !important;
  }

  &__sections {
    display: flex;

    a + a {
      margin-left: 1rem;
    }
  }
}
</style>
