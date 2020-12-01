import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { FaCartPlus} from 'react-icons/fa';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome hanifa.</p>
    <FaCartPlus/>
    
    
  </Layout>
)

export default IndexPage
