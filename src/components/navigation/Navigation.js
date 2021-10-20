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
  <div class="container mx-auto px-6 py-2 flex justify-between items-center text-2xl">
    <a class="" href="/">
			🌷
    </a>
{/*
*** Hamburger Menu Goes Here *** 
Todo: Learn out to Hamburger Tailwind Nav
*/}
    <div class="">
      <ul class="inline-flex">
        {NavItem.map(ListItem => (
        <li key={ListItem.link}><Link to={ListItem.link} class="px-4">{ListItem.text}</Link></li>
        ))}
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navigation