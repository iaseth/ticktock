


export default function SecondsCircle ({
	radius, date
}) {

	let seconds = date.getSeconds();
	let angle = 2 * Math.PI * (seconds-15) / 60;
	let style = {
		left: Math.round(radius * Math.cos(angle)),
		top: Math.round(radius * Math.sin(angle))
	};

	return (
		<div className="SecondsCircle absolute w-full h-full">
			<div className="relative top-1/2 left-1/2 bg-transparent">
				<div className="absolute w-8 h-8 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2 duration-300" style={style}></div>
			</div>
		</div>
	);
}
