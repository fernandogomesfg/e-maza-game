<template>
  <div class="q-pa-md bg-light-blue-1">
    <div class="bg-transparent text-grey-9">
      <q-toolbar>
        <q-toolbar-title>Fernando Gomes <br><span class="text-blue-9">fernandogomesfg </span> </q-toolbar-title>
        <q-avatar size="80px">
          <img src="https://github.com/fernandogomesfg.png">
        </q-avatar>
      </q-toolbar>
    </div>
  </div>

  <div class="q-pa-md  bg-light-blue-1">
    <q-card class="my-card  bg-light-blue-1" flat  >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            class="text-grey-9 text-subtitle2"
          >
            Por aqui desde Novembro de 2021
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>

  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section
        class="bg-indigo"
        horizontal>
        <q-card-section class="q-pt-9">
          <div>
             Complete o seu perfil
          </div>
          <div>
            Com alguns passos rapidos, esssa pagina vai ficar a sua cara
          </div>
        </q-card-section>

        <q-separator vertical />

        <q-card-section>
          <div>
             Complete o seu perfil
          </div>
          <div>
            Com alguns passos rapidos, esssa pagina vai ficar a sua cara
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md">
    <div class="text-h6">
      Estatisticas
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn align="around" class="btn-fixed-width full-width" color="primary" label="5 - Dia da Ofensiva" icon="home" />
      <q-btn align="around" class="btn-fixed-width full-width" color="primary" label="100 - Total de XP" icon="home" />
      <q-btn align="around" class="btn-fixed-width full-width" color="primary" label="76 - Total de moedas" icon="home" />
      <q-btn align="around" class="btn-fixed-width full-width" color="primary" label="0 - Podios" icon="home" />
    </div>

    <div class="q-pa-md q-gutter-sm ">
      <q-btn
        icon="mail"
        icon-right="send"
        rounded
        class="full-width"
        color="white"
        text-color="black"
        label="Convidar Amigos e Familia"
      />
    </div>
  </div>


</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {

    }
  }
}
</script>

<style >
  .imagem{
    width: 500px;
  }
</style>


