import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const NotFoundPage = () => (
  <Layout>
    <div id='main'>
        <ProjectPage 
            title="Gatsby Material UI Starter"
            image={thumb01}
            githubLink="https://github.com/dominicabela/gatsby-starter-material-ui"
            demoLink="https://material-ui-starter.netlify.com/"
        />
    </div>
  </Layout>
)

export default NotFoundPage
