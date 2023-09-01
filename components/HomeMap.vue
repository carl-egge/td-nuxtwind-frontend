<template>
    <div>
        <MapboxMap map-id="{ID}" style="position: relative; height: 250px; width: 100%;" :options="{
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [10.044652150704563, 53.585858561767836], // starting position 53.585858561767836, 10.044652150704563
            zoom: 14 // starting zoom
        }">
            <MapboxDefaultMarker marker-id="marker1" :options="{}" :lnglat="[10.044652150704563, 53.585858561767836]">
            </MapboxDefaultMarker>
        </MapboxMap>
    </div>
</template>
  
<script>
export default {
    name: "MapImage",
    data() {
        return {}
    },
};
</script>