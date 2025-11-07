export function health() {
	return {
		status: 'ok' as const,
		timestamp: new Date()
	};
}
