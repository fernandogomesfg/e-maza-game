<template>
  <q-footer class="bg-transparent">
    <div class="q-pa-sm" >
      <q-tabs
        style="border-radius: 50px"
        v-model="tab"
        class="bg-white text-grey shadow-2"
        indicator-color="transparent"
        active-color="primary"
      >

        <q-tab>
          <q-route-tab
            to="/computer"
            exact
            name="computer"
            icon="computer"
          />
        </q-tab>

        <q-tab>
          <q-route-tab
            to="/piechart"
            exact
            name="pie_chart"
            icon="pie_chart"
          />
        </q-tab>

        <q-tab>
          <q-route-tab
            to="/ranking"
            exact
            name="emoji_events"
            icon="emoji_events"
          />
        </q-tab>

        <q-tab>
          <q-route-tab
            to="/star"
            exact
            name="star"
            icon="star"
          />
        </q-tab>

        <q-tab>
          <q-route-tab
            to="/profile"
            exact
            name="person"
            icon="person"
          />
        </q-tab>
      </q-tabs>


    </div>
  </q-footer>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FooterComponent',

  setup(){
    const tab = ref('mail')


    return{
      tab
    }
  }
})

</script>
