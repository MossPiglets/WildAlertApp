<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useQuasar } from "quasar";
const $q = useQuasar();
$q.dark.set(false);
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle>
          <img src="./assets/Logo.png" class="app__img" />
        </QToolbarTitle>
        <QSpace />
      </QToolbar>
    </QHeader>

    <QPageContainer class="q-pa-none app__main-container">
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<style lang="scss" scoped>
.app {
  &__img {
    height: 2.4rem;
    margin-top: 0.5rem;
  }
  &__main-container {
    background: #f1f1f1;
    height: 100vh;
  }
}
</style>
