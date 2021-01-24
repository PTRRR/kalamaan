<template lang="pug">
  .menu
    .menu__home
      a Kalamaan

    .menu__sections
      a Chi siamo
      a Novita
      a Contatti
      a.menu--highlight Dona
</template>

<style lang="scss">
.menu {
  font-family: $font-medium;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;

  a {
    // text-transform: uppercase;
    color: white;
  }

  &__sections {
    a + a {
      margin-left: 1rem;
    }
  }

  &--highlight {
    padding: 0.5rem;
    background-color: gold;
    color: white;
  }
}
</style>
