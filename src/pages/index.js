import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{color:`purple`}}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://avatars2.githubusercontent.com/u/25520340?s=460&v=4" alt="" />
  </div>
)
