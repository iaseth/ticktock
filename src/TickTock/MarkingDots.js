import MarkingDot from './MarkingDot';



export default function MarkingDots ({
	radius, dotSize, n, group_length
}) {

	if (dotSize === undefined) dotSize = 10;
	if (n === undefined) n = 60;
	if (group_length === undefined) group_length = 5;

	let dotSizePx = dotSize + "px";
	let step = 360 / n;

	let markingItems = Array(n).fill(0).map((x, index) => {
		let props = {
			radius, group_length, dotSizePx, step, index
		};
		return <MarkingDot key={index} {...props} />;
	});

	let dotContainerStyle = {
		left: -dotSize/2 + "px",
		top: -dotSize/2 + "px"
	};

	return (
		<div className="MarkingDots absolute w-full h-full">
			<div className="relative top-1/2 left-1/2 bg-transparent w-20 h-20">
				<div className="relative" style={dotContainerStyle}>
					{markingItems}
				</div>
			</div>
		</div>
	);
}
