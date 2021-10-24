import React from 'react'
import Link from 'gatsby-link'

//data
const FooterHeading = 'Project Illumination'
const FooterItems = [
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

const TheFooter = () => {
    return (
        <footer>
            <div className='container mx-auto'>
                <h2 className='text-xl p-6'>{FooterHeading}</h2>
                <ul className="inline-flex">
                    {FooterItems.map(FooterItem => (
                        <li key={FooterItem.text}>
                            <Link to={FooterItem.link} className="p-6 hover:underline">
                                {FooterItem.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default TheFooter