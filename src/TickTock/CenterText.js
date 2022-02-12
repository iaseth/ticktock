


function padZero (x) {
	return (x < 10) ? "0" + x : x;
}

export default function CenterText ({
	date
}) {

	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	const seconds = padZero(date.getSeconds());
	const month = date.toLocaleString('default', { month: 'long' });

	return (
		<div className="CenterText absolute flex h-full w-full text-white text-center">
			<div className="m-auto">
				<div className="text-4xl">
					<span>{hours}</span>
					<span>:</span>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</div>
				<div className="py-1">
					<div className="w-full h-1 bg-indigo-700"></div>
				</div>
				<div className="text-sm font-bold text-slate-100">
					<span>{date.getDate()}</span>
					<span> </span>
					<span>{month}</span>
					<span> </span>
					<span>{date.getFullYear()}</span>
				</div>
			</div>
		</div>
	);
}
