import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	position: fixed;
	top: 0;
	right: 0;
   z-index: 10;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	padding-top: 3.5em;
	background-color: #134074;
   transition: transform 0.33s ease-in-out;
   transform: ${({open}) => open ? 'translate(0)' : 'translate(100%)'};
`;

export default function RightSideMenu({open}) {
   return (
      <Ul open={open}>
         
      </Ul>
   )
}
