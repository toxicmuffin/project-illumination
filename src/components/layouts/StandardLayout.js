import React from 'react'
import Navigation from '../navigation/Navigation'
import "./standardlayout.scss"

const StandardLayout = ({ children }) => (
<div>
	<Navigation />
	<main>
		{children}
	</main>
</div>
)

export default StandardLayout