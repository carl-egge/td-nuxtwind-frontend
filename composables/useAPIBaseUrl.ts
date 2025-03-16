export const useAPIBaseUrl = () => {
	// This function is used to reformat the URl that was provided by the pretix API.
	// The pretix API provides URLs with localhost domain. This must be switched to the
	// domain of the live pretix instance that is used.
	function switchBaseUrl(url: string): string {
		const config = useRuntimeConfig();
		const newDomain = config.public.pretixBaseUrl;
		const urlParts: string[] = url.split('/');

		// Join all url parts from index 3 and higher together with a slash
		const urlPath = urlParts.slice(3).join('/');

		return newDomain + '/' + urlPath;
	}

	return {
		switchBaseUrl,
	};
};
