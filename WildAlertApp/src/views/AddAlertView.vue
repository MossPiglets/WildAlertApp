<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { AlertRequest } from "@/models/AlertRequest";
import { Animal } from "@/models/Animal";
import { computed, onMounted, ref, watch } from "vue";
import alertsService from "@/services/alertsService";

onMounted(() => {
  mapContainer.value = L.map("mapContainer").setView(
    [50.049683, 19.944544],
    13
  );
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapContainer.value);
  mapContainer.value.on("click", onMapClick);
  marker.value = L.marker([0, 0]).addTo(mapContainer.value);
});
const alertRequest = ref<AlertRequest>({
  animal: Animal.Boar,
  latitude: 0,
  longitude: 0,
  comments: ``,
});
const mapContainer = ref();

const onReportButtonClick = () => {
  alertsService.post(alertRequest.value);
};

const marker = ref();
const onMapClick = (event: any) => {
  alertRequest.value.latitude = event.latlng.lat;
  alertRequest.value.longitude = event.latlng.lng;
};

watch(
  alertRequest,
  (newValue) => {
    const newCoordinate = new L.LatLng(newValue.latitude, newValue.longitude);
    marker.value.setLatLng(newCoordinate);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <QPageContainer class="q-pa-lg add-alert-view__container">
    <div class="add-alert-view__radio-container">
      <QRadio
        v-model="alertRequest.animal"
        :val="animal"
        :label="animal.toString()"
        v-for="(animal, index) in Animal"
        :key="index"
        color="accent"
      />
    </div>
    <div class="add-alert-view__input-wraper">
      <span class="add-alert-view__text">Lokalizacja</span>
      <div id="mapContainer" class="add-alert-view__map-container"></div>
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

    <QBtn color="accent" class="full-width" @click="onReportButtonClick"
      >Zgłoś</QBtn
    >
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
  &__radio-container {
    color: black;
  }
  &__map-container {
    height: calc(35vh - 56px);
    width: 86vw;
  }
}
</style>
