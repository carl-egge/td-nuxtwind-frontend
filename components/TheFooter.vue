<template>
	<footer
		class="flex flex-col items-center bg-theme-secondary text-center text-text shadow-lg"
	>
		<div class="container px-6 pt-6">
			<!-- Divider -->
			<div class="mb-8 flex justify-center">
				<Icon
					name="material-symbols:sailing"
					class="h-6 w-6"
					aria-hidden="true"
				/>
			</div>

			<!-- Columns section -->
			<div class="mb-2 grid md:grid-cols-3">
				<div id="footer-col-links" class="my-6 md:mb-2 md:mt-0">
					<h5 class="mb-2.5 font-bold uppercase">Seiten</h5>
					<div class="flex">
						<div class="flex-none md:w-8 lg:w-16 xl:w-32 2xl:w-36" />
						<div class="flex-auto">
							<ul class="mb-0 list-none md:text-left">
								<li>
									<NuxtLink to="/stuecke" class="hover:text-primary">
										Unser Spielplan
									</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/vermietung" class="hover:text-primary">
										Vermietung
									</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/datenschutz" class="hover:text-primary">
										Datenschutzerklärung
									</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/impressum" class="hover:text-primary">
										Impressum
									</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div id="footer-col-address" class="my-6 md:mb-2 md:mt-0">
					<h5 class="mb-2.5 font-bold uppercase">Kontakt</h5>
					<div class="flex">
						<div class="xl:w-18 flex-none md:w-6 lg:w-16 2xl:w-28" />
						<div class="flex-auto">
							<ul class="mb-0 list-none md:text-left">
								<li>
									<NuxtLink
										href="https://maps.app.goo.gl/D1NbVJin8KoinZmE6"
										target="_blank"
										class="hover:text-primary"
									>
										<Icon
											name="material-symbols:other-houses"
											aria-hidden="true"
										/>
										Maurienstr. 19, 22305 Hamburg
									</NuxtLink>
								</li>
								<li class="lg:my-1">
									<NuxtLink
										href="mailto:info@theaterdeck.de"
										class="hover:text-primary-600"
									>
										<Icon name="material-symbols:mail" aria-hidden="true" />
										info@theaterdeck.de
									</NuxtLink>
								</li>
								<li>
									<NuxtLink
										href="tel:0406321322"
										class="hover:text-primary-600"
									>
										<Icon
											name="material-symbols:phone-enabled"
											aria-hidden="true"
										/>
										040 6321322
									</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div id="footer-col-contact" class="my-6 md:mb-2 md:mt-0">
					<h5 class="mb-2.5 font-bold uppercase">Bürozeiten</h5>
					<div class="flex">
						<div class="flex-none md:w-4 lg:w-10 xl:w-20 2xl:w-28" />
						<div class="flex-auto">
							<ul class="mb-0 list-none md:text-left">
								<li>
									<strong>Montag</strong>
									<Icon
										name="material-symbols:arrow-right-rounded"
										aria-hidden="true"
									/>
									10:00 bis 12:00 Uhr
								</li>
								<li class="lg:my-1">
									<strong>Donnerstag</strong>
									<Icon
										name="material-symbols:arrow-right-rounded"
										aria-hidden="true"
									/>
									10:00 bis 12:00 Uhr
								</li>
								<li>Unser Anrufbeantworter wird täglich abgehört.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright section -->
		<div class="bg-primary-400/10 mt-2 w-full p-4">
			<div class="flex flex-col-reverse md:flex-row md:justify-between">
				<div class="my-2 flex-1 text-center md:my-0 md:text-left">
					<NuxtLink to="/" class="hover:text-primary-600">
						© 2024 Theaterdeck Hamburg
					</NuxtLink>
				</div>
				<div class="my-4 flex-1 text-center md:my-0 md:text-right">
					<NuxtLink
						href="https://www.facebook.com/theaterdeck"
						target="_blank"
						class="mx-3"
					>
						<Icon name="mdi:facebook" class="hover:text-primary text-2xl" />
					</NuxtLink>
					<NuxtLink
						href="https://www.instagram.com/theaterdeck/"
						target="_blank"
						class="mx-3"
					>
						<Icon name="mdi:instagram" class="hover:text-primary text-2xl" />
					</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
