import './Turbine.css';



function Wing () {
	return (
		<div className="bg-slate-800 w-4 h-16">
			<div className="bg-slate-700 -mx-2 h-2"></div>
		</div>
	);
}

export default function Turbine () {

	return (
		<div className="Turbine w-40">
			<div className="w-4 h-32 bg-slate-900 mx-auto border-b-[40px] border-b-orange-700">
				<div className="h-0">
					<div className="relative rotating-turbine">
						<div className="absolute h-0">
							<Wing />
						</div>
						<div className="absolute h-0 rotate-[120deg]">
							<Wing />
						</div>
						<div className="absolute h-0 rotate-[240deg]">
							<Wing />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
