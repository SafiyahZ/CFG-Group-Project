import React from "react";
import './anca.css';
import { default as Hero } from '../../components/hero/Hero';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BrowserRouter as  Link } from 'react-router-dom';



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

const Anca = () => {
return (
    
	<div>
    <Hero />
    {/* {/* <nav>
        <Link to="/">
        <AnchorLink href="#projects">
          <button>Projects</button>
        </AnchorLink>
        </Link>
        <Link to="/">
        <AnchorLink href="#ilike">
           <button>I like</button>
        </AnchorLink>
        </Link>
        <Link to="/">
        <AnchorLink href="#blog">
            <button>Blog</button>
        </AnchorLink>
        </Link>
    </nav> */}
	<Projects/>
	<Ilike/>
    <Blog/> 
	</div>
   
)
}

export default Anca


