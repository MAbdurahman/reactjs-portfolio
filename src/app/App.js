import React from 'react';
import './../stylesheets/home.css';
import './../stylesheets/header-footer.css'
import './../stylesheets/about.css';
import './../stylesheets/skills.css';
import './../stylesheets/portfolio.css';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Home from './../pages/Home';
import About from './../pages/About';
import Portfolio from '../pages/Portfolio';
import Skills from '../pages/Skills';
import Contact from './../pages/Contact';


export default function App() {
	return (
		<div>
			<Preloader /> 
			<Navigation />
			<Home />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
}
