<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Map } from "@types/leaflet";
import { onMounted, ref } from "vue";
import alertsService from "@/services/alertsService";

onMounted(() => {
  const mapContainer = L.map("mapContainer").setView(
    [50.049683, 19.944544],
    13
  );
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapContainer);
  setPins(mapContainer);
});

const pins = ref([]);

const setPins = (mapContainer: Map) => {
  // call do api
  alertsService
    .get()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  const marker = L.marker([50.049683, 19.944544]).addTo(mapContainer);
};
</script>

<template>
  <div id="mapContainer" class="map-view__map-container"></div>
  <QPageSticky
    position="bottom-right"
    :offset="[18, 18]"
    class="map-view__sticky-button-container"
  >
    <QBtn fab icon="add" color="accent" text-color="black" />
  </QPageSticky>
</template>

<style lang="scss" scoped>
.map-view {
  &__map-container {
    height: calc(100vh - 56px);
    width: 100vw;
  }
  &__sticky-button-container {
    z-index: 10000;
  }
}
</style>
