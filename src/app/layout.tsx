import type { Metadata } from 'next';
import 'react-multi-carousel/lib/styles.css';
import '../../public/fonts/fonts.scss';
import './globals.css';

export const metadata: Metadata = {
	title: 'Slider-App',
	description:
		'Carousel Slider built with NextJS 15, TailwindCSS, Typescript',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
