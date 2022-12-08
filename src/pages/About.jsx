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
								<img className='about_photo' src='./assets/about/author.jpg' alt='author' />
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
											have a Masters in Computer Science, coupled
											with special interests in Mathematics and Fine
											Art. I specialize in creating beautiful
											responsive websites, using the best practices
											and latest guideline standards. As a result, my
											websites are semantic and SEO friendly, which
											improves the quality and quantity of your
											website traffic.
										</p>
										<p className='about-text'>
											When I am not writing code, I volunteer with my
											local community center. Where I mentor
											children, helping students with their homework,
											raising money for community events, and
											assisting with various maintenance projects. I am{' '}
											<strong>
												<em> a Dedicated Problem Solver!</em>
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
													View More
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
