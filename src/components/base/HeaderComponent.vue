<template>
  <q-header class="bg-white text-primary">
        <q-toolbar>
          <!--<q-btn
            @click="emit('toggleDrawer')"
            flat
            dense
            icon="menu"
            class="q-mr-sm"
          />-->
          <q-btn
            flat
            dense
            class="q-mr-sm"
            color="transparent"
          >
            <img src="images/header-menu.png" alt="">
          </q-btn>


          <q-toolbar-title>
            <div class="text-center q-pt-sm">
              <div
                class="text-grey-9 text-bold"
                style="font-size: 12pt">
                Calouro
              </div>

              <div>
                <q-linear-progress
                  rounded
                  size="17px"
                  :value="progress"
                  color="primary"
                  class="q-mt-xs"
                />
              </div>

              <div
                style="font-size: : 20pt">
                <span class="text-bold">300 pts</span>
                <span class="text-grey-9 text-bold"> / 1000 pts</span>
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

<style scoped>
  .rounded-borders{
    border-radius: 20px;
  }
</style>
