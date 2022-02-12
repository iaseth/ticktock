


export default function Dial ({
	radius, bg
}) {

	let radiusPx = radius + "px";
	let style = {
		width: radiusPx,
		height: radiusPx
	};

	return (
		<div className="Dial absolute flex h-full w-full">
			<div className={"m-auto rounded-full " + bg} style={style}></div>
		</div>
	);
}
