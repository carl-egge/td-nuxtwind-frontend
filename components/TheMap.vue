<template>
	<LMap ref="map" :zoom="zoom" :center="center" :use-global-leaflet="false">
		<LTileLayer
			:url="url"
			attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
			layer-type="base"
			name="OpenStreetMap"
		/>
		<LMarker :lat-lng="marker" />
	</LMap>
</template>

<script setup>
	const url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	const center = ref([53.58582651805985, 10.044896996245901]);
	const marker = ref([53.58582651805985, 10.044896996245901]);
	const zoom = ref(15);
</script>
