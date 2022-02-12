import Markings from './Markings';



export default function TickTock () {

	return (
		<div className="min-h-screen bg-indigo-500">
			<div className="py-12">
				<div className="w-96 h-96 m-auto bg-indigo-600 rounded-full flex relative">
					<Markings />
				</div>
			</div>
			<footer className="flex py-6">
				<div className="text-white text-center mx-auto bg-indigo-600 px-12 py-4">
					<a href="https://github.com/iaseth/ticktock" target="_blank" rel="noreferrer" className="px-4 py-3 text-sm bg-indigo-600 duration-300 hover:bg-indigo-700">GitHub</a>
					<h2 className="text-4xl py-6">ticktock</h2>
				</div>
			</footer>
		</div>
	);
}
