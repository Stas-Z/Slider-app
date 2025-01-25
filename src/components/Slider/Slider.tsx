'use client';
import { memo } from 'react';
import { ISlide } from '@/types/slider';
import Carousel from 'react-multi-carousel';
import { SliderItem } from '../SliderItem/SliderItem';
import { CustomDot } from '../CustomDot/CustomDot';
import { responsive } from '@/settings/sliderSettings';

interface SliderProps {
	slides: ISlide[];
}

export const Slider = memo((props: SliderProps) => {
	const { slides } = props;
	return (
		<Carousel
			responsive={responsive}
			infinite
			autoPlay
			ssr={true}
			arrows={false}
			centerMode={false}
			partialVisible={true}
			showDots
			renderDotsOutside
			customDot={<CustomDot />}
			dotListClass="ml-2 mb-6 relative justify-start lg:hidden"
		>
			{slides.map((slide) => (
				<SliderItem key={slide.id} slide={slide} />
			))}
		</Carousel>
	);
});

Slider.displayName = 'Slider';
