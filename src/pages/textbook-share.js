import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const NotFoundPage = () => (
  <Layout>
    <div id='main'>
        <ProjectPage 
            title="Peer2Peer Textbook Share"
            image={thumb01}
            githubLink="https://github.com/dominicabela/TextbookShare"
        />
    </div>
  </Layout>
)

export default NotFoundPage
