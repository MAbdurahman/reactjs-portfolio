import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Header() {
	//**************** variables ****************//
	const [showHeader, setShowHeader] = useState(false);
	const path = window.location.pathname;

	return (
		<div className='header'>
			{showHeader ? (
				<RiCloseFill
					className='menu-icon position-fixed top-0 end-0'
					onClick={() => {
						setShowHeader(!showHeader);
					}}
				/>
			) : (
				<RiMenu3Fill
					className='menu-icon position-fixed top-0 end-0'
					onClick={() => {
						setShowHeader(!showHeader);
					}}
				/>
			)}

			<ul className={`${showHeader ? 'show-header' : 'hide-header'}`}>
				<li className={`${path == '/' && 'active'}`}>
					<Link to='/'>Home</Link>
				</li>
				<li className={`${path == '/about' && 'active'}`}>
					<Link to='/about'>About</Link>
				</li>
				<li className={`${path == '/projects' && 'active'}`}>
					<Link to='/projects'>Projects</Link>
				</li>
				<li className={`${path == '/courses' && 'active'}`}>
					<Link to='/courses'>Courses</Link>
				</li>
				<li className={`${path == '/contact' && 'active'}`}>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</div>
	);
}
