import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const title = "Developer Portfolio"
const githubLink = "https://github.com/dominicabela/personal-site"
const description = <p>I built my developer portfolio as a place to display some of my software projects and artwork.
I used React with Gatsby.js. Credit to <a href="https://html5up.net/">HTML5 UP</a> for part of the design.</p>

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
