import * as React from "react"
import GlobalLayout from "../components/layouts/GlobalLayout"
import Featured from "../components/Featured/Featured"
// data

// markup
const IndexPage = () => {
  return (
    <GlobalLayout>
      <Featured />
      {/* 
      - Feed
      - More Featured
      - Content
      */}
    </GlobalLayout>
  )
}

export default IndexPage
