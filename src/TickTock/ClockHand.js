


export default function ClockHand ({
	x, max, padding, length, thickness, ticktick
}) {

	if (max === undefined) max = 60;
	if (padding === undefined) padding = 160;
	if (length === undefined) length = 100;
	if (thickness === undefined) thickness = 5;
	if (ticktick === undefined) ticktick = true;

	let angle = (360 * (x-15) / max);
	let rotate = `rotateZ(${angle}deg)`;
	let parentStyle = {
		transform: rotate,
		transitionDuration: (ticktick ? "300ms" : "1s")
	};

	let style = {
		top: (-thickness/2) + "px",
		left: padding + "px",
		width: length + "px",
		height: thickness + "px"
	};

	return (
		<div className="ClockHand absolute w-full h-full">
			<div className="relative top-1/2 left-1/2 bg-transparent w-0 h-0" style={parentStyle}>
				<div className="relative bg-slate-300" style={style}></div>
			</div>
		</div>
	);
}
