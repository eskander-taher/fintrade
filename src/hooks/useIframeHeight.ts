import { useEffect, useState, RefObject } from "react";

export const useIframeHeight = (
	iframeRef: RefObject<HTMLIFrameElement>,
	minHeight: number = 600
) => {
	const [iframeHeight, setIframeHeight] = useState<number>(minHeight);

	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			// Handle both Kourse's frameHeight and any custom height messages
			if (event.data && typeof event.data === "object") {
				const height = event.data.frameHeight || event.data.height;
				if (height) {
					setIframeHeight(Math.max(minHeight, height + 40)); // Add padding
				}
			}
		};

		// Send a message to the iframe to request its height
		const requestHeight = () => {
			if (iframeRef.current && iframeRef.current.contentWindow) {
				iframeRef.current.contentWindow.postMessage({ type: "requestHeight" }, "*");
			}
		};

		window.addEventListener("message", handleMessage);

		// Request height periodically and on load
		const interval = setInterval(requestHeight, 1000);
		if (iframeRef.current) {
			iframeRef.current.addEventListener("load", requestHeight);
		}

		return () => {
			window.removeEventListener("message", handleMessage);
			clearInterval(interval);
			if (iframeRef.current) {
				iframeRef.current.removeEventListener("load", requestHeight);
			}
		};
	}, [iframeRef, minHeight]);

	return iframeHeight;
};
