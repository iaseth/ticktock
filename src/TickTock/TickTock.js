import React from 'react';
import colorita from 'colorita';

import CenterText from './CenterText';
import Dial from './Dial';
import MarkingDots from './MarkingDots';
import SecondsCircle from './SecondsCircle';
import ClockHand from './ClockHand';



export default function TickTock () {
	let [date, setDate] = React.useState(new Date());
	let [showFooter, setShowFooter] = React.useState(true);

	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours = date.getHours();

	let bgColor = `hsl(${seconds * 6}, 75%, 50%)`;

	React.useEffect(() => {
		const id = setInterval(function () {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(id);
	}, []);

	function handleKeydown (event) {
		if (event.ctrlKey) return;
		if (event.altKey) return;

		if (event.shiftKey) {
			let key = event.key.toUpperCase();
			switch (key) {
				case "H": setShowFooter(showFooter => !showFooter); break;
				default: return;
			}
		}
	}

	React.useEffect(() => {
		document.addEventListener("keydown", handleKeydown, false);

		return function cleanUp () {
			document.removeEventListener("keydown", handleKeydown, false);
		}
	}, []);

	return (
		<div className="bg-indigo-500 select-none flex flex-col overflow-hidden">
			<div className="flex grow md:min-h-screen py-12 min-h-screen" style={{backgroundColor: bgColor}}>
				<div className="m-auto bg-red-300 w-0 h-0 scale-[0.50] md:scale-100">
					<div className="w-[500px] h-[500px] m-auto rounded-full flex relative -translate-y-1/2 -translate-x-1/2">
						<Dial radius={250} bg="bg-indigo-700" />
						<MarkingDots radius={270} />
						<Dial radius={240} bg="bg-indigo-700" />
						<Dial radius={235} bg="bg-indigo-600" />
						<MarkingDots radius={220} dotSize={6} />
						<Dial radius={170} bg="bg-indigo-700" />
						<Dial radius={165} bg="bg-indigo-600" />
						<Dial radius={160} bg="bg-indigo-700" />
						<MarkingDots radius={140} n={12} group_length={3} />
						<Dial radius={120} bg="bg-indigo-600" />
						<Dial radius={115} bg="bg-indigo-700" />
						<Dial radius={110} bg="bg-indigo-600" />
						<CenterText date={date} />
						<SecondsCircle x={hours * 5} radius={140} />
						<SecondsCircle x={minutes} radius={220} />
						<SecondsCircle x={minutes} radius={320} />
						<SecondsCircle x={seconds} radius={270} />
						<SecondsCircle x={seconds} radius={320} />
						<ClockHand x={seconds} />
						<ClockHand x={seconds} padding={280} length={30} />
						<ClockHand x={minutes} length={48} />
						<ClockHand x={minutes} padding={230} length={75} />
					</div>
				</div>
			</div>
			{showFooter && <footer className="">
				<div className="text-white text-center mx-auto bg-indigo-600 px-12 py-20">
					<a href="https://github.com/iaseth/ticktock" target="_blank" rel="noreferrer" className="text-base font-bold px-4 py-3 text-sm bg-indigo-700 duration-300 hover:bg-indigo-800">iaseth | ticktock</a>
				</div>
			</footer>}
		</div>
	);
}
