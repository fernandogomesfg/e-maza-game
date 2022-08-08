<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="320px"
      infinite
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Quero progredir</div>
          <div class="text-subtitle1">Ganhar mais pontos</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Sou Maza</div>
          <div class="text-subtitle1">eMazaGame</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Sou nerd</div>
          <div class="text-subtitle1">Vou conquistar mais pontos</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div>
      <div class="row justify-end">
        <q-btn
          flat
          color="primary"
          label="Ver todos"
        />
      </div>
    </div>

    <div class="row justify-first">
      <q-btn
        flat
        color="primary"
        label="Jogos Populares"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn push color="white" text-color="primary" label="Nivel 1" />
      <q-btn push color="white" text-color="primary" label="Nivel 2" />
      <q-btn push color="white" text-color="primary" label="Nivel 3" />
    </div>

    <q-carousel
      arrows
      animated
      v-model="slide"
      height="100px"
      infinite
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Quero progredir</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Sou Maza</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Sou nerd</div>
        </div>
      </q-carousel-slide>
    </q-carousel>


  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('first')
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 1px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
