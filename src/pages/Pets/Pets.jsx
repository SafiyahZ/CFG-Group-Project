import React from "react";
import './pets.css';
import { default as Hero } from '../../components/hero/Hero';

const Projects= () => {
	return (
		<div id="projects">
			Some of my projects using HTML, JS and CSS
		</div>
	)
}

const Ilike = () => {
	return (
		<div id="ilike">
			Few of my favorite things
		</div>
	)
}

const Blog = () => {
	return (
		<div id="blog">
			Few of my favorite things
		</div>
	)
}

const Pets = () => {
return (
    
	<div>
    <Hero />
  
	<Projects/>
	<Ilike/>
    <Blog/> 
	</div>
   
)
}

export default Pets


