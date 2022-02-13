import React from 'react';
import colorita from 'colorita';

import './TickTock.css';

import CenterText from './CenterText';
import Dial from './Dial';
import Ring from './Ring';
import MarkingDots from './MarkingDots';
import SecondsCircle from './SecondsCircle';
import ClockHand from './ClockHand';

const project_URL = "https://github.com/iaseth/ticktock";
const project_link = <a href={project_URL} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded font-bold text-base text-white bg-indigo-700 border-2 border-indigo-500 duration-300 hover:bg-indigo-800">iaseth | ticktock</a>;



export default function TickTock () {
	let [date, setDate] = React.useState(new Date());
	let [showFooter, setShowFooter] = React.useState(true);

	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours = date.getHours();

	let secondsPlus30 = (seconds + 30) % 60;
	let minutesPlus30 = (minutes + 30) % 60;

	let currentBg = `hsl(${seconds * 6}, 60%, 50%)`;

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
				case "A": setShowFooter(showFooter => !showFooter); break;
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

			<div className="flex grow py-12 min-h-screen overflow-hidden" style={{backgroundColor: currentBg}}>
				<div className="m-auto bg-red-300 w-0 h-0 scale-[0.50] md:scale-100">
					<div className="w-[500px] h-[500px] m-auto rounded-full flex relative -translate-y-1/2 -translate-x-1/2">
						<Ring diameter="500px" thickness="10px" />
						<MarkingDots radius={270} />
						<Ring diameter="470px" thickness="65px" />
						<MarkingDots radius={220} dotSize={6} />
						<Ring diameter="330px" thickness="5px" />
						<MarkingDots radius={140} n={12} group_length={3} />
						<Ring diameter="240px" thickness="5px" />
						<Ring diameter="220px" thickness="110px" />
						<CenterText date={date} currentBg={currentBg} />
						<SecondsCircle x={hours * 5} radius={140} />

						<ClockHand x={seconds} />
						<SecondsCircle x={seconds} radius={270} />
						<ClockHand x={seconds} padding={280} length={30} />
						<SecondsCircle x={seconds} radius={320} />
						<ClockHand x={seconds} padding={330} length={60} />
						<SecondsCircle x={seconds} radius={400} />

						<SecondsCircle x={secondsPlus30} radius={270} />
						<ClockHand x={secondsPlus30} />

						<ClockHand x={minutes} length={48} />
						<SecondsCircle x={minutes} radius={220} />
						<ClockHand x={minutes} padding={230} length={28} />
						<SecondsCircle x={minutes} radius={270} />

						<SecondsCircle x={minutesPlus30} radius={220} />
						<ClockHand x={minutesPlus30} length={48} />
					</div>
				</div>
			</div>

			<div className="hidden md:block fixed bottom-12 right-12">
				{project_link}
			</div>

			{showFooter && <footer className="">
				<div className="text-white text-center mx-auto bg-slate-800 px-12 py-32 border-t-4 border-slate-800">
					{project_link}
				</div>
			</footer>}

		</div>
	);
}
