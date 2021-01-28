<template lang="pug">
footer.footer
  .footer__inner
    .footer__column
      p Kalamaan
      p Ch. des Cerisiers 1
      p 1020 Renens
      p Suisse
      br
      p T +41 78 654 98 37
      p M info@kalamaan.ch

    .footer__column
      a Chi siamo
      a Novita
      a Contatti

    .footer__column
      a.footer--hightlight Dona
</template>

<style lang="scss">
@import '@/styles/mixins';

.footer {
  color: $white;
  background-color: $green;
  padding: $h-padding * 0.5 $h-padding;

  a {
    display: block;
  }

  &--hightlight {
    @include regular-crop;
    padding: 0.5rem;
    margin: -0.5rem 0;
    background-color: $red;
    color: $white !important;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: $s-max-width;
  }
}
</style>
