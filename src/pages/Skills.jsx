import React from 'react';
import { Link } from 'react-scroll';

export default function Skills() {
   return (
		<>
			<section class='skills' id='skills'>
				<div class='max-width'>
					<h2 class='skills-title'>Tech Skills</h2>
					<div class='skills-content'>
						<div class='column left'>
							<div class='text'>Tech Skills & experiences.</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos, ratione error est recusandae consequatur,
								iusto illum deleniti quidem impedit, quos quaerat quis
								minima sequi. Cupiditate recusandae laudantium esse,
								harum animi aspernatur quisquam et delectus ipsum quam
								alias quaerat? Quasi hic quidem illum. Ad delectus natus
								aut hic explicabo minus quod.
							</p>
							<button className='btn-default btn-blue'>
								<Link
									activeClass='active'
									to='portfolio'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								>
									See More
								</Link>
							</button>
						</div>
						<div class='column right'>
							<div class='bars'>
								<div class='info'>
									<span>HTML</span>
									<span>90%</span>
								</div>
								<div class='line html'></div>
							</div>
							<div class='bars'>
								<div class='info'>
									<span>CSS</span>
									<span>75%</span>
								</div>
								<div class='line css'></div>
							</div>
							<div class='bars'>
								<div class='info'>
									<span>JavaScript</span>
									<span>80%</span>
								</div>
								<div class='line js'></div>
							</div>
							<div class='bars'>
								<div class='info'>
									<span>PHP</span>
									<span>65%</span>
								</div>
								<div class='line php'></div>
							</div>
							<div class='bars'>
								<div class='info'>
									<span>MySQL</span>
									<span>70%</span>
								</div>
								<div class='line mysql'></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
