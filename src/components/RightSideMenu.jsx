import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useGlobalContext } from '../utils/context';
import { Link } from 'react-scroll';

const moveFromRight = keyframes`
	0% {
		opacity: 0;
		-webkit-transform: translateX(10rem);
		transform: translateX(10rem);
	}
	80% {
		-webkit-transform: translateX(-5rem);
		transform: translateX(-5rem);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
`;


const MenuList = styled.ul`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 10;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding-top: 3.5em;
	background-color: #134074;
	transition: transform 0.5s ease-in-out;
	transform: ${({ isOpen }) => (isOpen ? 'translate(0)' : 'translate(100%)')};

	&.active li {
		--webkit-animation-name: ${moveFromRight};
		animation-name: ${moveFromRight};
		--webkit-animation-duration: 0.4s;
		animation-duration: 0.4s;
		--webkit-animation-timing-function: linear;
		animation-timing-function: linear;
		--webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
	}
	&.active li:nth-child(1) {
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(2) {
		-webkit-animation-delay: 1s;
		animation-delay: 1s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(3) {
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(4) {
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(5) {
		-webkit-animation-delay: 2.5s;
		animation-delay: 2.5s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}

	li {
		position: relative;
		margin-top: 1.5625em;
		padding: 1em 0.625em;
		list-style: none;
		opacity: 0;
		cursor: pointer;
	}

	a {
		position: relative;
		padding-bottom: .5em;
		font-size: 1.667rem;
		font-weight: bolder;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #edeef4 !important;
		background-color: transparent;
		border-radius: 3px;
		--webkit-transition: color 0.5s,
									border 0.5s;
		transition: color 0.5s,
						border 0.5s;
		--webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	a:before {
		content: '';
		position: absolute;
		bottom: -0.0125em;
		left: 0;
		right: 0;
		display: block;
		height: 3px;
		background: #13315c;
		background: #8da9c4;
		transform: scale(0, 1);
		transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	a:hover::before,
	a.active::before {
		transform: scale(1, 1);
	}
`;

export default function RightSideMenu() {
	const { isOpen, closeMenu } = useGlobalContext(); 

	return (
		<MenuList isOpen={isOpen} className={`${isOpen ? 'active' : ''}`}>
			<li>
				<Link
					activeClass='active'
					to='home'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={closeMenu}
		
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					activeClass='active'
					to='about'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={closeMenu}
				>
					About Me
				</Link>
			</li>
			<li>
				<Link
					activeClass='active'
					to='skills'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={closeMenu}
				>
					Tech Skills
				</Link>
			</li>
			<li>
				<Link
					activeClass='active'
					to='portfolio'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={closeMenu}
				>
					Portfolio
				</Link>
			</li>
			<li>
				<Link
					activeClass='active'
					to='contact'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={closeMenu}
				>
					Contact Me
				</Link>
			</li>
		</MenuList>
	);
}
