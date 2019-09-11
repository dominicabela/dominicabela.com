import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const title = "Gatsby Material UI Starter"
const githubLink = "https://github.com/dominicabela/gatsby-starter-material-ui"
const demoLink = "https://material-ui-starter.netlify.com/"
const description = <p>"<a href="https://www.gatsbyjs.org/">Gatsby</a> is a free and open source framework based on React 
that helps developers build blazing fast websites and apps." They have a large library of starter sites that help developers
build new sites much faster. I wanted to contribute to the project so I built a starter for developers who want to use Gatsby
with Material UI (a popular React UI framework). You can see the project featured on the Gatsby website <a href="https://www.gatsbyjs.org/starters/dominicabela/gatsby-starter-material-ui/">here</a>.</p>

const NotFoundPage = () => (
<Layout>
    <div id="main">
      <ProjectPage
        title={title}
        image={thumb01}
        githubLink={githubLink}
        demoLink={demoLink}
        description={description}
      />
    </div>
  </Layout>
)

export default NotFoundPage
