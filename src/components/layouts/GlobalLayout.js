import React from 'react'
import Navigation from '../navigation/Navigation'
import "./global-layout.scss"

const GlobalLayout = ({ children }) => (
<div>
	<Navigation />
	<main>
		{children}
	</main>
</div>
)

export default GlobalLayout