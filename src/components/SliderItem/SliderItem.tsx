import React, { memo } from 'react';

import { ISlide } from '@/types/slider';
import Image from 'next/image';

interface SliderItemProps {
	slide: ISlide;
}

export const SliderItem = memo((props: SliderItemProps) => {
	const { slide } = props;
	return (
		<div className="mx-2 flex justify-around cursor-pointer select-none">
			<div className="rounded-lg bg-[#F0F0F0] p-4 lg:p-6 flex flex-col justify-between w-full max-w-[358px] lg:max-w-[412px] lg:h-[256px] h-[212px]">
				<div className="flex flex-nowrap gap-6 lg:flex-col lg:justify-between lg:h-full">
					<Image
						className="lg:w-20 lg:h-20 w-[60px] h-[60px]"
						src={slide.icon}
						alt={slide.title}
						width={80}
						height={80}
					/>
					<h3 className="lg:text-3xl text-2xl">{slide.title}</h3>
				</div>
				<p className="lg:hidden text-sm">{slide.description}</p>
			</div>
		</div>
	);
});

SliderItem.displayName = 'SliderItem';
