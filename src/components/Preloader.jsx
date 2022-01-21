import React from 'react';
import Gif from './../img/gifs/preloader.gif';

export default function Preloader() {
   return (
		<div id='preloader'>
			<img
				className='preloader-gif'
				src={Gif}
				alt='Set of Gears'
				id='preloader-gif'
			/>
		</div>
	);
}
