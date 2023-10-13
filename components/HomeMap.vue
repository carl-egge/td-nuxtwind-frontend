<template>
    <div>
        <MapboxMap :map-id="mapId" style="position: relative; height: 250px; width: 100%;" :options="{
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [10.044652150704563, 53.585858561767836], // starting position 53.585858561767836, 10.044652150704563
            zoom: 14 // starting zoom
        }">
            <MapboxDefaultMarker marker-id="marker1" :options="{}" :lnglat="[10.044652150704563, 53.585858561767836]">
            </MapboxDefaultMarker>
            <MapboxNavigationControl position="top-left" />
        </MapboxMap>
    </div>
</template>
  
<script setup>
// import mapboxgl from 'mapbox-gl'
const mapId = 'theaterdeck-hamburg'
useMapbox(mapId, (map) => {
    // disable scroll zoom
    map.scrollZoom.disable()
})
</script>