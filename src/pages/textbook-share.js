import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
import thumb01 from '../assets/images/thumbs/01.jpg'

const title = "Peer2Peer Textbook Share"
const githubLink = "https://github.com/dominicabela/TextbookShare"
const description = "This project was a group project for my Software Engineering class. \
The goal was to create a platform for students to buy and sell textbooks directly between \
each other. We built the front-end with React and the backend using Google Firebase. \
The project was selected for University Research Day 2018 and we had the opportunity to display \
it to several hundred people."


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
