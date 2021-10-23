import React from 'react'
import Navigation from '../navigation/Navigation'
import Footer from '../Footer/Footer'
import "./global-layout.scss"

const GlobalLayout = ({ children }) => (
	<div>
		<Navigation />
		<main>
			{children}
		</main>
		<Footer />
	</div>
)

export default GlobalLayout