import Marking from './Marking';



export default function Markings () {
	let radius = 210;
	let dotSize = 8;
	let dotSizePx = dotSize + "px";

	let markingItems = Array(60).fill(0).map((x, i) => {
		let markClass = "Marking absolute rounded-full";
		markClass += (i % 5 === 0) ? " bg-red-500" : " bg-white";
		let degree = i * 6;
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
			<div key={i} className={markClass} style={style}></div>
		);
	});

	let dotContainerStyle = {
		left: -dotSize/2 + "px",
		top: -dotSize/2 + "px"
	};

	return (
		<div className="Markings absolute w-full h-full">
			<div className="Markings relative top-1/2 left-1/2 bg-transparent w-20 h-20">
				<div className="relative" style={dotContainerStyle}>
					{markingItems}
				</div>
			</div>
		</div>
	);
}
