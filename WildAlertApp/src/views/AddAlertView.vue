<script setup lang="ts">
import type { AlertRequest } from "@/models/AlertRequest";
import { Animal } from "@/models/Animal";
import { computed, ref } from "vue";

const alertRequest = ref<AlertRequest>({
  animal: Animal.Unknown,
  latitude: 0,
  longitude: 0,
  comments: ``,
});
const lokalization = computed({
  get: () =>
    alertRequest.value?.longitude + ", " + alertRequest.value?.latitude,
  set: (val: string) => {
    const [longitude, latitude] = val.split(",");
    if (alertRequest.value) {
      alertRequest.value.longitude = +(longitude ?? ``);
      alertRequest.value.latitude = +(latitude ?? ``);
    }
  },
});
</script>

<template>
  <QPageContainer class="q-pa-lg add-alert-view__container">
    <div class="add-alert-view__input-wraper">
      <span class="add-alert-view__text">Lokalizacja</span>
      <QInput outlined v-model="lokalization" dense color="black" />
    </div>
    <div class="add-alert-view__input-wraper">
      <span class="add-alert-view__text">Opis</span>
      <QInput
        outlined
        v-model="alertRequest.comments"
        clearable
        type="textarea"
        color="black"
      />
    </div>

    <QBtn color="accent" class="full-width">Zgłoś</QBtn>
  </QPageContainer>
</template>

<style lang="scss" scoped>
.add-alert-view {
  &__text {
    color: black;
    font-size: 1.2rem;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__input-wraper {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
}
</style>
