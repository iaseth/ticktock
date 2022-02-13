


export default function Ring ({
	diameter, thickness
}) {

	let style = {
		width: diameter,
		height: diameter,
		borderWidth: thickness
	};

	return (
		<div className="Dial absolute flex h-full w-full">
			<div className={"m-auto rounded-full border-slate-800 border opacity-30"} style={style}></div>
		</div>
	);
}
