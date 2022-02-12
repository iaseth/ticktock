


function padZero (x) {
	return (x < 10) ? "0" + x : x;
}

export default function CenterText ({
	date
}) {

	let hours = padZero(date.getHours());
	let minutes = padZero(date.getMinutes());
	let seconds = padZero(date.getSeconds());

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
			</div>
		</div>
	);
}
