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
        <q-tab
          name="computer"
          icon="computer"
        />
        <q-tab name="mails" icon="pie_chart" />
        <q-tab name="alarms" icon="emoji_events" />
        <q-tab name="movies" icon="star" />
        <q-tab name="movies" icon="person" />
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
