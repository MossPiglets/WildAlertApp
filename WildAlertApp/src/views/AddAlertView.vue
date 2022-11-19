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
  get: () => alertRequest.value?.longitude + ", " + alertRequest.value?.latitude,
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
  <QPageContainer>
    <span class="add-alert-view__text">Lokalizacja</span>
    <QInput
      outlined
      v-model="lokalization"
      dense
      color="black"
    />
  </QPageContainer>
</template>

<style lang="scss" scoped>
.add-alert-view {
  &__text {
    color: black;
  }
}
</style>
