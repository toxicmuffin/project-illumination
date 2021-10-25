import React from 'react'
import Link from 'gatsby-link'

// data
const NavItem = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Discover',
    link: '/discover',
  },
  {
    text: 'About',
    link: '/about'
  }
]

const Navigation = () => {
return (
    <nav>
      <div className='py-2 flex justify-between items-center text-2xl'>
        <a className='' href='/'>
          🌷
        </a>
    {/*
    *** Hamburger Menu Goes Here *** 
    Todo: Learn out to Hamburger Tailwind Nav
    */}
        <div className=''>
          <ul className='inline-flex'>
            {NavItem.map(ListItem => (
            <li key={ListItem.link}><Link to={ListItem.link} className='px-4 hover:underline'>{ListItem.text}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation