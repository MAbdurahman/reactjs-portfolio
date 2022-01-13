import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Contact from './../pages/Contact';
import Courses from './../pages/Courses';
import Projects from './../pages/Projects';
import About from './../pages/About';


export default function App() {
  return (
		<div>
			<BrowserRouter>
				<Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
				<Route path='/projects' exact component={Projects} />
				<Route path='/courses' exact component={Courses} />
				<Route path='/contact' exact component={Contact} />
			</BrowserRouter>
		</div>
  );
}
