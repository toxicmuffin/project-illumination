import * as React from "react"
import GlobalLayout from "../components/layouts/GlobalLayout/GlobalLayout"
import HeroSection from "../components/Featured/HeroSection"

// data
const heading = 'Discover'

const Discover = () => {
  return (
    <GlobalLayout>
        <HeroSection testVariable={heading}/>
    </GlobalLayout>
  )
}

export default Discover
