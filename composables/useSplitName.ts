export function useSplitName(fullName: string) {
	const trimmed = fullName.trim();

	if (!trimmed) {
		return { forename: '', lastname: '' };
	}

	// This regex handles common German particles (e.g., "von", "van")
	const parts = trimmed.split(/\s+/);
	if (parts.length === 1) {
		return { forename: parts[0], lastname: '' };
	}

	// Check for particles in the last two words
	const lastTwo = parts.slice(-2);
	const particlePattern = /^(von|van|de|del|di)$/i;

	let lastname = '';
	if (particlePattern.test(lastTwo[0])) {
		// Combine the particle with the last word
		lastname = lastTwo.join(' ');
		parts.splice(-2);
	} else {
		lastname = parts.pop()!;
	}

	const forename = parts.join(' ');
	return { forename, lastname };
}
