import React from 'react';
import { Link } from 'react-scroll';

export default function Skills() {
   return (
		<>
			<section className='skills' id='skills'>
				<div className='container' id='skills-container'>
					<div className='skills-title'>
						<h2>Tech Skills</h2>
					</div>
					<div className='skills-content'>
						<div className='column left'>
							<div className='text'>Soft Skills & experiences.</div>
							<p>
								Lorem interpersonal skill sit amet consectetur adipisicing elit.
								Dignissimos, ratione error est recusandae consequatur,
								iusto illum deleniti communication, quos quaerat quis
								minima sequi. Collaboration recusandae laudantium esse,
								harum animi leadership quisquam et delectus ipsum quam
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
						<div className='column right'>
							<div className='bars'>
								<div className='info'>
									<span>HTML</span>
									<span>90%</span>
								</div>
								<div className='line html'></div>
							</div>
							<div className='bars'>
								<div className='info'>
									<span>CSS</span>
									<span>75%</span>
								</div>
								<div className='line css'></div>
							</div>
							<div className='bars'>
								<div className='info'>
									<span>JavaScript</span>
									<span>80%</span>
								</div>
								<div className='line js'></div>
							</div>
							<div className='bars'>
								<div className='info'>
									<span>PHP</span>
									<span>65%</span>
								</div>
								<div className='line php'></div>
							</div>
							<div className='bars'>
								<div className='info'>
									<span>MySQL</span>
									<span>70%</span>
								</div>
								<div className='line mysql'></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
