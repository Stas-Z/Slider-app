import { useEffect, useRef } from 'react';

export const usePreventHorizontalScroll = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let firstClientX: number, clientX: number;

		const touchStart = (event: TouchEvent) => {
			firstClientX = event.touches[0].clientX;
		};

		const preventTouch = (event: TouchEvent) => {
			const minValue = 5; // threshold
			clientX = event.touches[0].clientX - firstClientX;

			if (Math.abs(clientX) > minValue) {
				event.preventDefault();
				event.returnValue = false;
			}
		};

		const container = containerRef.current;

		if (container) {
			container.addEventListener('touchstart', touchStart);
			container.addEventListener('touchmove', preventTouch, {
				passive: false,
			});
		}

		return () => {
			if (container) {
				container.removeEventListener('touchstart', touchStart);
				container.removeEventListener('touchmove', preventTouch);
			}
		};
	}, []);

	return containerRef;
};
