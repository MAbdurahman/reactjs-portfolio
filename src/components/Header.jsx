import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Header() {
	//**************** variables ****************//
	const [showHeader, setShowHeader] = useState(false);

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
		</div>
	);
}
