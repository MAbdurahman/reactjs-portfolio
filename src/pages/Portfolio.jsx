import React from 'react';

export default function Portfolio() {
   return (
		<>
			<section id='portfolio'>
				<div className='portfolio-title'>
					<h2>My Portfolio</h2>
				</div>
				<div className='filter-container'>
					<ul id='portfolio-filters'>
						<li
							class='btn-general btn-blue active'
							data-filter='all'
						>
							all projects
						</li>
						<li
							class='button btn-general btn-blue'
							data-filter='software'
						>
							courses
						</li>
						<li class='button btn-general btn-blue' data-filter='website'>
							websites
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};
