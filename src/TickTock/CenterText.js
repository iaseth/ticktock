


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
		<div className="CenterText absolute flex h-full w-full text-white">
			<div className="m-auto">
				<div className="text-4xl">
					<span>{hours}</span>
					<span>:</span>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</div>
			</div>
		</div>
	);
}
