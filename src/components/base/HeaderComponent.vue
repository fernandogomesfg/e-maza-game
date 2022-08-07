<template>
  <q-header class="bg-white text-primary">
        <q-toolbar>
          <q-btn
            flat
            dense
            icon="menu"
            class="q-mr-sm"
          />


          <q-toolbar-title>
            <div class="text-center">
              <div
                class="text-grey-9 text-bold"
                style="font-size: 12pt">
                Caloiro
              </div>

              <div>
                <q-linear-progress
                  rounded size="17px"
                  :value="progress"
                  color="warning"
                  class="q-mt-sm"
                />
              </div>

              <div
                style="font-size: : 20pt">
                300 pts <span class="text-grey-9 text-bold"> / 1000 pts</span>
              </div>
            </div>
          </q-toolbar-title>

          <q-btn
            flat
            round
            dense
          >
            <q-avatar>
              <img src="https://github.com/fernandogomesfg.png">
            </q-avatar>
          </q-btn>
        </q-toolbar>
      </q-header>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',

  setup () {
    const progress = ref (.3)


    return {
      progress
    }
  }
})

</script>
