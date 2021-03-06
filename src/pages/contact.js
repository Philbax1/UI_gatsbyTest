import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>

		<Link to="/">Home</Link>
  	    <Link to="/about/">About</Link>
		<Link to="/contact/">Contact</Link>
		<Link to="/posts/">Posts</Link>
		
    </div>
  )
}