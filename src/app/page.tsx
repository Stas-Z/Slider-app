import { Slider } from '@/components/Slider/Slider';
import { slides } from '@/const/slides';

export default function Page() {
	return (
		<main className="px-2 flex-col-reverse flex pt-20 lg:pt-4">
			<Slider slides={slides} />
		</main>
	);
}
