


export default function MarkingDot ({
	radius, group_length, dotSizePx, step, index
}) {

	let markClass = "MarkingDot absolute rounded-full";
	markClass += (index % group_length === 0) ? " bg-indigo-900" : " bg-indigo-300";
	let degree = index * step;
	let radian = degree * Math.PI / 180;
	let left = Math.round(radius * Math.sin(radian));
	let top = Math.round(-radius * Math.cos(radian));
	let style = {
		width: dotSizePx,
		height: dotSizePx,
		left: left + "px",
		top: top + "px"
	};

	return (
		<div className={markClass} style={style}></div>
	);
}
