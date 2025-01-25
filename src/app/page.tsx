import { Slider } from '@/components/Slider/Slider';
import { slides } from '@/const/slides';

export default function Page() {
	return (
		<main>
			<Slider slides={slides} />
		</main>
	);
}
