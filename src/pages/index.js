import * as React from "react"
import { Link } from "gatsby"
import { getLowResolutionImageURL, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Card from "../components/sections/Card"
import CardSection from "../components/sections/CardSection"
import CardStack from "../components/animations/CardStack"
import Hero from "../components/sections/Hero"
import CardFixed from "../components/sections/CardFixed"
import MenuButton from "../components/buttons/MenuButton"
import Header from "../components/layout/header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Hero />
    <CardSection />
  </Layout>
)

export default IndexPage
