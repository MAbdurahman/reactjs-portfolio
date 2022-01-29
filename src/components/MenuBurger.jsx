import React from 'react';
import styled from 'styled-components';
import RightSideMenu from './RightSideMenu';
import { useGlobalContext } from '../utils/context';

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
		background-color: ${({ isOpen }) => isOpen ? '#bdbaba' : '#bdbaba'};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.333s linear;

		&:nth-child(1) {
			transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
		}

		&:nth-last-child(2) {
			transform: ${({ isOpen }) =>
				isOpen ? 'translateX(300%)' : 'translateX(0)'};
		}

		&:nth-child(3) {
			transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export default function MenuBurger() {
	//**************** variables ****************//
	const { isOpen, handleClick } = useGlobalContext();

	return (
		<>
			<StyledBurger isOpen={isOpen} onClick={handleClick}>
				<div />
				<div />
				<div />
			</StyledBurger>
         <RightSideMenu />
		</>
	);
}
