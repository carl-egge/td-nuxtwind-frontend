<template>
	<div
		v-if="visible"
		class="cookie-notice border-primary-500 fixed bottom-2 left-2 right-2 z-50 mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 rounded-none border bg-white p-4 text-gray-800 shadow-lg md:items-center"
	>
		<p class="text-sm">
			<strong class="mb-1 block text-base">🍪 Hinweis zu Cookies</strong>
			Wir verwenden nur technisch notwendige Cookies, um die Funktionalität
			unserer Website zu gewährleisten - z. B. zur Abwicklung von
			Ticketbuchungen, zur Spamabwehr (Cloudflare Turnstile) und zur Darstellung
			von Karten (Leaflet). Weitere Informationen finden Sie in unserer
			<NuxtLink
				class="hover:text-primary-500 font-normal text-text"
				to="/datenschutz"
			>
				Datenschutzerklärung
			</NuxtLink>
			.
		</p>
		<UButton
			size="sm"
			color="primary"
			class="max-w-xl shrink-0"
			block
			@click="acceptCookies"
		>
			Verstanden
		</UButton>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';

	const cookieConsent = useCookie('cookie_consent', {
		maxAge: 60 * 60 * 24 * 365,
	}); // 1 Jahr gültig
	const visible = ref(false);

	onMounted(() => {
		if (!cookieConsent.value) {
			visible.value = true;
		}
	});

	function acceptCookies() {
		cookieConsent.value = 'accepted';
		visible.value = false;
	}
</script>

<style scoped>
	.cookie-notice {
		animation: fadeIn 0.3s ease;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
