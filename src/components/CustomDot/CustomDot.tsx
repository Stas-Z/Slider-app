import { memo } from 'react';

interface CustomDotProps {
	onClick?: () => void;
	active?: boolean;
}

export const CustomDot = memo((props: CustomDotProps) => {
	const { onClick, active } = props;
	return (
		<li className="flex items-center">
			<button
				onClick={onClick}
				className={`h-2 relative mx-1 rounded-full transition-all duration-700 ease-in-out bg-gray-300 ${
					active ? 'w-10' : 'w-2'
				}`}
			>
				<span
					className={` h-2 absolute top-0 left-0 rounded-full transition-all duration-700 ${
						active ? 'bg-black w-5' : 'bg-transparent w-2'
					}`}
				></span>
			</button>
		</li>
	);
});

CustomDot.displayName = 'CustomDot';
