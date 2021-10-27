import React from 'react'
import testdata from '../../../content/configs/general-properties.json'

//data
// const FooterHeading = 'Project Illumination'
// const FooterItems = [
//     {
//         text: 'Home',
//         link: '/',
//     },
//     {
//         text: 'Blog',
//         link: '/blog',
//     },
//     {
//         text: 'Discover',
//         link: '/discover',
//     },
//     {
//         text: 'About',
//         link: '/about'
//     }
// ]

const TheFooter = () => {
    return (
        <footer>
            <div>
                <h2 className='text-xl p-3'>{testdata['footerContent']['footerHeader']}</h2>
            </div>
        </footer>
    )
}

export default TheFooter