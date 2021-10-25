import * as React from "react"
import GlobalLayout from "../components/layouts/GlobalLayout/GlobalLayout"
import Featured from "../components/Featured/Featured"
import Feed from "../components/Featured/Feed"
// data

const IndexPage = () => {
  return (
    <GlobalLayout>
      <Featured />
      <Feed />
    </GlobalLayout>
  )
}

export default IndexPage
