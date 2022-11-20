<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Map } from "@types/leaflet";
import { onMounted, ref, watch } from "vue";
import alertsService from "@/services/alertsService";
import dayjs from 'dayjs'

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
  checkPosition();
});

const currentPosition = ref({
  latitude: 50.049683,
  longtitude: 19.944544,
});

const checkPosition = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      currentPosition.value.latitude = position.coords.latitude;
      currentPosition.value.longtitude = position.coords.longitude;
    });
  }
};

watch(checkPosition, () => {
  getPins();
});

const getPins = () => {
  return alertsService
    .get(currentPosition.value.longtitude, currentPosition.value.latitude, 15)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

const setPins = async (mapContainer: Map) => {
  const pins = await getPins();
  var icon = L.icon({
    iconUrl: '../assets/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });
  for (const pin of pins) {

    const marker = L.marker([pin.latitude, pin.longitude], { icon: icon }).addTo(mapContainer);
    const creationTime = dayjs().to(dayjs(pin.createdAt));
    marker.bindPopup(`<div class="map-view__container q-pa-xs">
    <span class="map-view__title">${pin.animal}</span>
    <span
      >${pin.comments}</span
    >
    <span>${pin.latitude}, ${pin.longitude}</span>
    <span>Zgłoszono ${creationTime}</span>
  </div>`).openPopup();
  }
};
</script>

<template>
  <div id="mapContainer" class="map-view__map-container"></div>
  <QPageSticky position="bottom-right" :offset="[18, 18]" class="map-view__sticky-button-container">
    <QBtn fab icon="add" color="accent" text-color="black" :to="{ name: 'addAlert' }" />
  </QPageSticky>
</template>

<style lang="scss">
.map-view {
  &__map-container {
    height: calc(100vh - 56px);
    width: 100vw;
  }

  &__sticky-button-container {
    z-index: 10000;
  }

  &__title {
    font-size: 1.4rem;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: black;
    max-width: 260px;
    font-size: 1rem;
  }
}
</style>
