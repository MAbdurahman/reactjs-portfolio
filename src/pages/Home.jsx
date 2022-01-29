import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
   return (
		<>
			<div
				id='home'
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
								<Link
									activeClass='active'
									to='about'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								>
									View More
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
