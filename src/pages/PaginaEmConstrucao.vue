<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>

      <div class="text-h3">
        ☹️
      </div>

      <div class="text-h3" style="opacity:.4">
        Ops!!!
      </div>

      <div class="text-h3 q-pt-xl" style="opacity:.4">
        Pagina em Desenvolvimento
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Voltar"
        no-caps
        size="md"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PaginaEmConstrucao'
})
</script>
