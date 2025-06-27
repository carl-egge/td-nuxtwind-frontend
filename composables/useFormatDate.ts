export const useFormatDate = () => {
	// This function is used to format a date string to a readable format
	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('de-DE', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour12: false,
			hour: 'numeric',
			minute: 'numeric',
		});
	}

	function justDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('de-DE', {
			day: '2-digit',
			month: '2-digit',
		});
	}

	function weekday(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('de-DE', {
			weekday: 'short',
		});
	}

	return {
		formatDate,
		weekday,
		justDate,
	};
};
