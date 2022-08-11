<template>

  <q-scroll-area
      class="q-pt-lg q-mb-lg"
      style="height: 180px; margin: -15px;"
    >
      <div class="row no-wrap">
        <div v-for="n in 5" :key="n" style="width: 300px; height: 180px;" class="q-pa-sm">
          <q-card class="full-height full-width" style="border-radius: 20px;">
            <q-img src="images/presente.jpg" style="height: 100%; width: 100%;">
              <div class="full-height" style="background: rgba(0, 0, 0, 0.3);">
                <div
                  class="text-h6"
                  style="font-size: 25pt; line-height: 42px"

                >
                  Transferir presente
                </div>

              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </q-scroll-area>

  <div class="q-pl-md q-mt-xl">
    <div class="text-subtitle2 text-left">
      Historico
    </div>
  </div>


  <div class="q-pa-none" style="max-width: 350px">
    <q-list bordered>
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2" >10 pontos</q-item-label>
          <q-item-label caption>Samantha432</q-item-label>
        </q-item-section>
        <q-item-section class="text-right">
          <q-item-section  side top>
            <q-item-label class="text-subtitle2" >10.00 MZN</q-item-label>
            <q-item-label caption>Samantha432</q-item-label>
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered>
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2" >10 pontos</q-item-label>
          <q-item-label caption>Samantha432</q-item-label>
        </q-item-section>
        <q-item-section class="text-right">
          <q-item-section  side top>
            <q-item-label class="text-subtitle2" >10.00 MZN</q-item-label>
            <q-item-label caption>Samantha432</q-item-label>
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered>
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2" >10 pontos</q-item-label>
          <q-item-label caption>Samantha432</q-item-label>
        </q-item-section>
        <q-item-section class="text-right">
          <q-item-section  side top>
            <q-item-label class="text-subtitle2" >10.00 MZN</q-item-label>
            <q-item-label caption>Samantha432</q-item-label>
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered>
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2" >10 pontos</q-item-label>
          <q-item-label caption>Samantha432</q-item-label>
        </q-item-section>
        <q-item-section class="text-right">
          <q-item-section  side top>
            <q-item-label class="text-subtitle2" >10.00 MZN</q-item-label>
            <q-item-label caption>Samantha432</q-item-label>
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered>
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2" >10 pontos</q-item-label>
          <q-item-label caption>Samantha432</q-item-label>
        </q-item-section>
        <q-item-section class="text-right">
          <q-item-section  side top>
            <q-item-label class="text-subtitle2" >10.00 MZN</q-item-label>
            <q-item-label caption>Samantha432</q-item-label>
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
  </div>




</template>

<script>
export default {
  setup () {
    return {
      progress1: 0.99,
      progress2: 0.70
    }
  }
}
</script>
