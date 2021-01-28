<template lang="pug">
.menu(:class='cssClasses')
  .menu__home
    a Kalamaan

  .menu__sections
    a Chi siamo
    a Novita
    a Contatti
    a.menu--highlight Dona

  .menu__mobile
    .menu__donation
      a.menu--highlight Dona

    .menu__burger(@click='$store.commit("toggleMenuPanel")')
      .menu__burger-line
      .menu__burger-line
      .menu__burger-line

  .menu__panel
    .menu__panel-sections
      a Chi siamo
      a Novita
      a Contatti
</template>

<script>
export default {
  data() {
    return {
      mode: 'image',
      panel: false,
    }
  },

  computed: {
    cssClasses() {
      return [
        `menu--${this.mode}`,
        { 'menu--panel': this.$store.getters.menuPanel },
      ]
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: color $transition-duration ease-in-out,
    background-color $transition-duration ease-in-out;
  $m: &;

  &--image {
    color: $white;
  }

  &--text,
  &--panel {
    color: $black;
    background-color: $white;
  }

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

  &__panel-sections {
    width: 40%;

    a {
      text-align: center;
    }

    a + a {
      margin-top: 1rem;
    }
  }

  &__sections {
    display: flex;

    a + a {
      margin-left: 1rem;
    }
  }

  &__mobile {
    display: none;
  }

  &__mobile,
  &__home {
    position: relative;
    z-index: 10;
  }

  &__burger {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: -0.25rem 0;
    margin-left: 1rem;

    &-line {
      width: 100%;
      height: $border-width;

      #{$m}--image & {
        background-color: $white;
      }

      #{$m}--text &,
      #{$m}--panel & {
        background-color: $black;
      }
    }
  }

  &__panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $white;
    display: none;
    justify-content: center;
    align-items: center;
    transform: translate(0, -100%);
    transition: transform $transition-duration ease-in-out;

    #{$m}--panel & {
      transform: translate(0, 0);
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    &__sections {
      display: none;
    }

    &__mobile {
      display: flex;
    }

    &__panel {
      display: flex;
    }
  }
}
</style>
