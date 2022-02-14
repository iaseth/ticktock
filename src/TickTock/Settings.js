import Toggle from './Toggle';



export default function Settings ({
	showAmPm, setShowAmPm,
	showSeconds, setShowSeconds,
	showWeekday, setShowWeekday,
	showDate, setShowDate,
	ticktick, setTicktick,
	showFooter, setShowFooter,
	showGitHub, setShowGitHub,
	showTurbines, setShowTurbines
}) {

	return (
		<div className="Settings max-w-4xl m-auto bg-slate-900 px-4 py-12 text-white">
			<h2 className="px-4">Settings</h2>
			<div className="px-4 py-6">
				<Toggle x={showAmPm} setX={setShowAmPm} title="12 | 24 H" />
				<Toggle x={showSeconds} setX={setShowSeconds} title="Seconds" />
				<Toggle x={showWeekday} setX={setShowWeekday} title="Weekday" />
				<Toggle x={showDate} setX={setShowDate} title="Date" />
				<Toggle x={ticktick} setX={setTicktick} title="Tick-tick" />
				<Toggle x={showFooter} setX={setShowFooter} title="Footer" />
				<Toggle x={showGitHub} setX={setShowGitHub} title="GitHub" />
				<Toggle x={showTurbines} setX={setShowTurbines} title="Turbine" />
			</div>
		</div>
	);
}
