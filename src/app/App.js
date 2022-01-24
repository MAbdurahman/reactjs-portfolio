import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './../stylesheets/home.css';
import './../stylesheets/header-footer.css'
import Preloader from '../components/Preloader';
import Home from './../pages/Home';
import Contact from './../pages/Contact';
import Courses from './../pages/Courses';
import Portfolio from '../pages/Portfolio';
import Projects from './../pages/Projects';
import About from './../pages/About';
import Error from './../pages/Error';
import Skills from '../pages/Skills';


export default function App() {
	return (
		<div>
			<Preloader />
			<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/skills' exact component={Skills} />
				<Route path='/portfolio' exact component={Portfolio} />
				<Route path='/projects' exact component={Projects} />
				<Route path='/courses' exact component={Courses} />
				<Route path='/contact' exact component={Contact} />
				<Route path='*' component={Error} />
			</Switch>
			</BrowserRouter>
		</div>
	);
}
