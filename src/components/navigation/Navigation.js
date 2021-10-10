import React from 'react'
import Link from 'gatsby-link'

// data
const NavItem = [
 {
 text: "Home",
 link: "/",
 },
 {
 text: "Page One",
 link: "/page1",
 },
 {
 text: "Page Two",
 link: "/page2",
 },
]

const Navigation = () => {
return (
	<nav>
		<ul>
			{NavItem.map(ListItem => (
			<li key={ListItem.link}><Link to={ListItem.link}>{ListItem.text}</Link></li>
			))}
		</ul>
	</nav>
)
}

export default Navigation