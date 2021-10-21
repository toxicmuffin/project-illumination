import React from 'react'
import Link from 'gatsby-link'

//data
// There are two ways I can approach this...
// I can use an array of objects and break them up by categor
const FooterHeadings = [
    {
        text: 'Heading One'
    },
    {
        text: 'Heading Two'
    }
]
const FooterItems = [
    {
        text: 'home',
        link: '/',
    },
    {
        text: 'lorem',
        link: '/'
    }
]

// or
// I can use an array of objects of objects...?
const FooterItemsV2 = [
    {
        grouping: {
            heading: {
                text: 'Heading One',
            },
            item1: {
                text: 'item 1',
                link: '/item1',
            },
            item2: {
                text: 'item 2',
                link: '/item2',
            }
        },
        grouping: {
            headings: 'Heading Two',
        },
        item1: {
            text: 'item one',
            link: '/itemOne',
        },
        item2: {
            text: 'item two',
            link: '/itemTwo',
        }
    }
]

const Footer = () => {
    return (
        <footer>

        </footer>
    )
}