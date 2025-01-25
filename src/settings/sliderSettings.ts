export const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 2000 },
		items: 5,
	},
	desktopLg: {
		breakpoint: { max: 2000, min: 1400 },
		items: 4,
	},
	desktopMd: {
		breakpoint: { max: 1400, min: 1024 },
		items: 3,
	},
	tabletLg: {
		breakpoint: { max: 1024, min: 846 },
		items: 2,
		partialVisibilityGutter: 80,
	},
	tablet: {
		breakpoint: { max: 846, min: 768 },
		items: 2,
		partialVisibilityGutter: 30,
	},
	mobileLg: {
		breakpoint: { max: 768, min: 686 },
		items: 2,
	},
	mobileMd: {
		breakpoint: { max: 686, min: 640 },
		items: 1,
		partialVisibilityGutter: 280,
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
	},
};
