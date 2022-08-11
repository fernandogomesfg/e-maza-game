<template>
  <div class="q-pa-md">
    <div
      class="text-subtitle1"
    >
      Bem-Vindo Fernando Gomes
    </div>

      <div
        class="text-h6"
      >
        Vamos comecar o dia
      </div>
  </div>

  <div class="q-mt-sm">

    <q-scroll-area
      style="height: 300px; margin: -15px;"
    >
      <div class="row no-wrap">
        <div v-for="n in 5" :key="n" style="width: 300px; height: 300px;" class="q-pa-sm">
          <q-card class="full-height full-width" style="border-radius: 20px;">
            <q-img src="images/main-person-image.png" style="height: 100%; width: 100%;">
              <div class="full-height" style="background: rgba(0, 0, 0, 0.3);">
                <div
                  class="text-h6"
                  style="font-size: 30pt; line-height: 42px"

                >
                Quer Progredir</div>
                <div class="text-subtitle2 q-mt-sm" style="font-weight: 100;">Ganhar mais pontos</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </q-scroll-area>
  </div>

  <div class="col-12 q-pl-xs q-mt-lg">
    <div class="row">
      <div class="col-6">
        <div style="font-size: 12pt;" class="text-bold">
          Jogos Populares
        </div>
      </div>
      <div class="col-6"></div>
    </div>
  </div>





    <q-scroll-area
      style="height: 150px; margin: -15px;"
    >
      <div class="row no-wrap">
        <div v-for="n in 5" :key="n" style="width: 300px; height: 150px;" class="q-pa-sm">
          <q-card class="full-height full-width" style="border-radius: 20px;">
            <q-img src="images/main-person-image.png" style="height: 100%; width: 100%;">
              <div class="full-height" style="background: rgba(0, 0, 0, 0.3);">
                <div
                  class="text-h6"
                  style="font-size: 30pt; line-height: 42px"

                >
                Matematica

                </div>

              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </q-scroll-area>



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
