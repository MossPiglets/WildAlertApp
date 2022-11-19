<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useQuasar } from "quasar";
import { useRouter } from 'vue-router';
const $q = useQuasar();
$q.dark.set(false);

const router = useRouter()
const onTitleCLick = () => {
  router.push({ name: "map" });
};
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle @click="onTitleCLick">
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
