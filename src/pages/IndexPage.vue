<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section
        horizontal>
        <q-img
         height="400px"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
      </q-card-section>
    </q-card>
  </div>

  <div
    class="text-center text-grey-9 text-bold text-subtitle1">
    <div>
      Torne-se fluente a qualquer lingua
    </div>

    <div>
      Agora pelo celular
    </div>
  </div>

  <div class="text-center">
    <q-btn
    unelevated
    rounded
    color="green"
    label="COMECAR AGORA"
    to="/computer"
    />
  </div>

</template>

<script>
export default {
  setup () {
    const texto1 = 'Torne-se fluente a qualquer lingua'

    const texto2 = 'Agora pelo celular'

    return {
      texto1,
      texto2
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px


</style>
