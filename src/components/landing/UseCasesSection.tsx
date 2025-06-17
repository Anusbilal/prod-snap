export function UseCasesSection() {
	return (
		<section className='py-16 px-4 bg-gray-100'>
			<h2 className='text-3xl font-bold text-center mb-12 font-heading'>
				Who Is It For?
			</h2>
			<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
				{/* Placeholder Use Case 1 */}
				<div>
					<h3 className='text-xl font-semibold mb-2 font-heading'>
						Use Case 1 Title
					</h3>
					<p className='font-body'>Use Case 1 description placeholder.</p>
				</div>
				{/* Placeholder Use Case 2 */}
				<div>
					<h3 className='text-xl font-semibold mb-2 font-heading'>
						Use Case 2 Title
					</h3>
					<p className='font-body'>Use Case 2 description placeholder.</p>
				</div>
			</div>
		</section>
	);
}
