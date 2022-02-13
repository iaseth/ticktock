


export default function SecondsCircle ({
	radius, x, max, size, thickness
}) {

	if (max === undefined) max = 60;
	if (size === undefined) size = 28;
	if (thickness === undefined) thickness = 4;

	let angle = 2 * Math.PI * (x-15) / max;
	let style = {
		left: Math.round(radius * Math.cos(angle)),
		top: Math.round(radius * Math.sin(angle)),
		width: size + "px",
		height: size + "px",
		borderWidth: thickness + "px"
	};

	return (
		<div className="SecondsCircle absolute w-full h-full">
			<div className="relative top-1/2 left-1/2 bg-transparent">
				<div className="absolute bg-transparent border-slate-300 rounded-full -translate-x-1/2 -translate-y-1/2 duration-300" style={style}></div>
			</div>
		</div>
	);
}
