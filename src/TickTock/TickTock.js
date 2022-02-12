import Markings from './Markings';



export default function TickTock () {

	return (
		<div className="min-h-screen bg-indigo-500 select-none flex flex-col overflow-hidden">
			<div className="flex grow md:min-h-screen py-12">
				<div className="m-auto bg-red-300 w-0 h-0 scale-[0.50] md:scale-100">
					<div className="w-[500px] h-[500px] m-auto bg-indigo-600 rounded-full flex relative -translate-y-1/2 -translate-x-1/2">
						<Markings radius={270} dotSize={10} n={60} />
						<Markings radius={120} dotSize={10} n={12} group_length={3} />
					</div>
				</div>
			</div>
			<footer className="">
				<div className="text-white text-center mx-auto bg-indigo-600 px-12 py-20">
					<a href="https://github.com/iaseth/ticktock" target="_blank" rel="noreferrer" className="text-2xl px-4 py-3 text-sm bg-indigo-700 duration-300 hover:bg-indigo-800">iaseth | ticktock</a>
				</div>
			</footer>
		</div>
	);
}
