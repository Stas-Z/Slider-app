'use client';
import { memo } from 'react';
import { ISlide } from '@/types/slider';
import Carousel from 'react-multi-carousel';
import { SliderItem } from '../SliderItem/SliderItem';
import { CustomDot } from '../CustomDot/CustomDot';
import { responsive } from '@/settings/sliderSettings';
import { usePreventHorizontalScroll } from '@/hooks/usePreventHorizontalScroll';

interface SliderProps {
	slides: ISlide[];
}

export const Slider = memo((props: SliderProps) => {
	const { slides } = props;

	const containerRef = usePreventHorizontalScroll();

	return (
		<div
			ref={containerRef}
			className="px-2 flex-col-reverse flex pt-20 lg:pt-4"
		>
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
				minimumTouchDrag={10}
			>
				{slides.map((slide) => (
					<SliderItem key={slide.id} slide={slide} />
				))}
			</Carousel>
		</div>
	);
});

Slider.displayName = 'Slider';
