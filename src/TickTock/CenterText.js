

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



function padZero (x) {
	return (x < 10) ? "0" + x : x;
}

export default function CenterText ({
	date, currentBg,
	showAmPm, showSeconds, showWeekday, showDate
}) {

	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	const seconds = padZero(date.getSeconds());
	const month = date.toLocaleString('default', { month: 'long' });

	return (
		<div className="CenterText absolute flex h-full w-full text-white text-center">
			<div className="m-auto">
				{showWeekday && <><div className="text-sm font-bold text-slate-100">
					<span>{weekdays[date.getDay()]}</span>
				</div>
				<div className="py-2">
					<div className="w-full h-1" style={{backgroundColor: currentBg}}></div>
				</div></>}
				<div className="text-4xl">
					<span>{showAmPm ? hours % 12 : hours}</span>
					<span className="relative bottom-1 px-1">:</span>
					<span>{minutes}</span>
					{showSeconds && <><span className="relative bottom-1 px-1">:</span>
					<span>{seconds}</span></>}
				</div>
				{showDate && <><div className="py-2">
					<div className="w-full h-1" style={{backgroundColor: currentBg}}></div>
				</div>
				<div className="text-sm font-bold text-slate-100">
					<span>{date.getDate()}</span>
					<span> </span>
					<span>{month}</span>
					<span> </span>
					<span>{date.getFullYear()}</span>
				</div></>}
			</div>
		</div>
	);
}
