


export default function Toggle ({
	x, setX, title
}) {

	let circleClass = "h-5 w-5 -translate-y-1 rounded-full duration-300";
	circleClass += x ? " bg-green-600 translate-x-7" : " bg-gray-600";

	function handleKeyPress (e) {
		if (e.keyCode === 32) {
			e.preventDefault();
			setX(!x);
		}
	}

	return (
		<div className="inline-block select-none px-3 py-3 mr-4 mb-4 w-32 overflow-hidden bg-slate-700 border-2 border-slate-600 cursor-pointer outline-none duration-300 shadow hover:bg-slate-800 hover:border-slate-500 focus:border-slate-500"
			onClick={() => setX(!x)} tabIndex="0" onKeyDown={handleKeyPress}>
			<div className="px-3 py-6 rounded-md">
				<div className="bg-gray-400 w-12 h-3 rounded-full m-auto">
					<div className={circleClass}></div>
				</div>
			</div>
			<div>
				<h2 className="text-sm text-center font-bold">{title}</h2>
			</div>
		</div>
	);
}
