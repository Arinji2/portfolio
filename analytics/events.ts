// biome-ignore lint/suspicious/noExplicitAny: We are using any because return type not used
export const trackEvent = (event: string, data: Record<string, any> = {}) => {
	if (typeof window !== "undefined") {
		// biome-ignore lint/suspicious/noExplicitAny: We are using any because window
		(window as any).umami?.track(event, data);
	}
};
