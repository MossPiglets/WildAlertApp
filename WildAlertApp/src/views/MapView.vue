<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { onMounted } from 'vue'


onMounted(() => {
  const mapContainer = L.map('mapContainer').setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapContainer);
})
</script>

<template>
  <div id="container">
   <div id="mapContainer" class="map-view__map-container"></div>
 </div>
</template>

<style lang="scss" scoped>
.map-view {
  &__map-container {
    height: 180px;
    width: 200px;
  }
}
</style>