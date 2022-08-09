<template>
  <div class="q-pa-md">
    <div class="text-h6 text-right">
      Ranking
    </div>
  </div>

  <div class="q-pa-xs">
    <q-list >
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            1
          </q-avatar>
        </q-item-section>
        <q-linear-progress stripe rounded size="35px" :value="progress1" color="primary" class="q-mt-none" />
      </q-item>
    </q-list>

    <q-list >
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            2
          </q-avatar>
        </q-item-section>
        <q-linear-progress stripe rounded size="30px" :value="progress2" color="green" class="q-mt-none" />
      </q-item>
    </q-list>
  </div>


  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            3
          </q-avatar>
        </q-item-section>
        <q-item-section>Fernando Gomes</q-item-section>
        <q-item-section avatar>
          87P
        </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            4
          </q-avatar>
        </q-item-section>
        <q-item-section>Fernando Gomes</q-item-section>
        <q-item-section avatar>
          85P
        </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            5
          </q-avatar>
        </q-item-section>
        <q-item-section>Fernando Gomes</q-item-section>
        <q-item-section avatar>
          77P
        </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            6
          </q-avatar>
        </q-item-section>
        <q-item-section>Fernando Gomes</q-item-section>
        <q-item-section avatar>
          67P
        </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            7
          </q-avatar>
        </q-item-section>
        <q-item-section>Fernando Gomes</q-item-section>
        <q-item-section avatar>
          57P
        </q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            8
          </q-avatar>
        </q-item-section>
        <q-item-section>Fernando Gomes</q-item-section>
        <q-item-section avatar>
          50P
        </q-item-section>
      </q-item>
      <q-separator />

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
