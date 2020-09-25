import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"


export default function Home() {
  return (
    <div style={{ color: `purple` }}>
		<h1>Posts</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
		
		<Link to="/">Home</Link>
  	    <Link to="/about/">About</Link>
		<Link to="/contact/">Contact</Link>
		<Link to="/posts/">Posts</Link>
		
	</div>
  );
}