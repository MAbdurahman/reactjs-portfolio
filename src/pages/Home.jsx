import React from 'react';
import Header from '../components/Header';

export default function Home() {
   return (
		<>
		<Header />
			<div
				className='introduction flex-with-center'
				style={{ backgroundImage: `url(./assets/introbg.svg)` }}
			>
				<div id='header-content' className='text-center'>
					<div id='header-content--inner'>
						<div id='header-heading'>
							<h1 id='header-heading--one'>Andre</h1>
							<h1 id='header-heading--two'>Romanovich</h1>
						</div>
						<div id='header-heading--sub'>
							<h2>Developer and Instructor</h2>
						</div>
						<div id='header-heading--btn'>
							<button className='primary-button'>
								<a href='#'>View More</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
