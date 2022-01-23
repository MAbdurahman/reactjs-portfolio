import React, { useState } from 'react';
import styled from 'styled-components';
import RightSideMenu from './RightSideMenu';

const StyledBurger = styled.div`
	position: fixed;
	top: 3%;
	right: 3%;
	width: 50px;
	height: 50px;
	z-index: 20;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
   background-color: transparent;
   transition: transform 0.333s cubic-bezier(0.26, 0.1, 0.27, 1.55);
	cursor: pointer;

   &:hover {
      transform: scale(1.1);
   }

	div {
		width: 3rem;
		width: 50px;
		height: 3px;
		background-color: ${({ open }) => open ? '#bdbaba' : '#bdbaba'};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.333s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		&:nth-last-child(2) {
			transform: ${({ open }) =>
				open ? 'translateX(300%)' : 'translateX(0)'};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export default function MenuBurger() {
	//**************** variables ****************//
	const [open, setOpen] = useState(false);
	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
         <RightSideMenu open={open} />
		</>
	);
}