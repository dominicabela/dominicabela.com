import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const title = "San Francisco Crime Data"
const githubLink = "https://github.com/dominicabela/SFCrime"
const description = "This project consists of a React web app with several different \
visualizations of San Francisco crime data. I used Mapbox to create a heatmap of crime \
locations and also included some charts showing different categories of crimes at different \
times of day. I'm currently making some adjustments to the UI but I will add a live demo when it's complete."

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <ProjectPage
        title={title}
        image={thumb01}
        githubLink={githubLink}
        description={description}
      />
    </div>
  </Layout>
)

export default NotFoundPage
