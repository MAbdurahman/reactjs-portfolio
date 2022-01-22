import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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


const Ul = styled.ul`
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
	transform: ${({ open }) => (open ? 'translate(0)' : 'translate(100%)')};

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
		-webkit-animation-delay: 0.5s;
		animation-delay: 1s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(3) {
		-webkit-animation-delay: 0.5s;
		animation-delay: 1.5s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(4) {
		-webkit-animation-delay: 0.5s;
		animation-delay: 2s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}
	&.active li:nth-child(5) {
		-webkit-animation-delay: 0.5s;
		animation-delay: 2.5s;
		--webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
	}

	li {
		position: relative;
		padding: 1em 0.625em;
		opacity: 0;
	}

	a {
		letter-spacing: 2px;
		color: #edeef4;
		background-color: transparent;
		border-radius: 3px;
		--webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	a:active,
	a:focus,
	a:hover {
		color: #13315c;
	}
	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: #8da9c4;
		opacity: 0;
		--webkit-transform: scale3d(0.7, 1, 1);
		transform: scale3d(0.7, 1, 1);
		--webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
		transition: transform 0.4s, opacity 0.4s;
		--webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}

	a:active::before,
	a:hover::before,
	a:focus::before {
		opacity: 1;
		--webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export default function RightSideMenu({ open }) {
	return (
		<Ul open={open} className={`${open ? 'active' : ''}`}>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/'>About Me</Link>
			</li>
			<li>
				<Link to='/'>Tech Skills</Link>
			</li>
			<li>
				<Link to='/'>Portfolio</Link>
			</li>
			<li>
				<Link to='/'>Contact Me</Link>
			</li>
		</Ul>
	);
}
