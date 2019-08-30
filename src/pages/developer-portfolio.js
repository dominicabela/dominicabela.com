import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const NotFoundPage = () => (
  <Layout>
    <div id='main'>
        <ProjectPage 
            title="Developer Portfolio"
            image={thumb01}
            githubLink="https://github.com/dominicabela/personal-site"
        />
    </div>
  </Layout>
)

export default NotFoundPage
