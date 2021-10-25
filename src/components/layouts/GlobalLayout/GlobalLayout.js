import React from 'react'
import Navigation from '../../Globals/Navigation'
import TheFooter from '../../Globals/Footer'
import "./global-layout.scss"

const GlobalLayout = ({ children }) => (
	<div className='container mx-auto px-6'>
		<Navigation />
		<main>
			{children}
		</main>
		<TheFooter />
	</div>
)

export default GlobalLayout