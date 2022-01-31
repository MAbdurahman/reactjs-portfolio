import React from 'react';
import { Link } from 'react-scroll';

export default function About() {
	return (
		<>
			<section id='about'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-5 col-xs-12'>
							<div className='about_image'>
								<img src='./assets/about/author.jpg' alt='author' />
							</div>
						</div>
						<div className='col-xl-7 col-xs-12'>
							<div className='about_info'>
								<div className='about_info--title'>
									<h2>About Me</h2>
								</div>
								<div className='about_info--content'>
									<div className='about-article'>
										<p className='about-text'>
											Hello!&nbsp;I am&nbsp;
											<strong>Andre Romanovich</strong>, a Developer
											and Instructor in Computer Science, living in
											the northeast region of the United States. I
											bring to the table eight years of experience in
											software and web development, and three years
											experience as a instructor in Computer Science,
											where I regularly assisted and aided students,
											managed and represented my company brand
											through exemplary service.
										</p>
										<p className='about-text'>
											Moreover, I have volunteered with my local
											community center for over seven years mentoring
											children and helping them with their homework,
											raising money for community events and
											assisting with maintenance projects. I am  
											<strong>
												<em> a dedicated Problem Solver!</em>
											</strong>
										</p>
										<div className='about_info--button-container'>
											<button className='btn-default btn-blue'>
												<Link
													activeClass='active'
													to='skills'
													spy={true}
													smooth={true}
													offset={0}
													duration={500}
												>
													Read More
												</Link>
											</button>
											<button className='btn-default btn-blue'>
												<a href='tel:9017538834'>Call Me</a>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
