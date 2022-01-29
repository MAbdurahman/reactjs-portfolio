import React from 'react';
import Header from '../components/Header';


export default function Home() {
   return (
		<>
		<Header />
			<div id='home'
				className='introduction'
				style={{ backgroundImage: `url(./assets/intro-background.svg)` }}
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
							<button className='btn-default btn-home'>
								<a href='#'>View More</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
