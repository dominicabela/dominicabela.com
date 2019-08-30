import React from 'react'

const ProjectPage = (props) => (
    <div>
        <h1>{props.title}</h1>
        <ul>
            <li><a href={props.githubLink}>Source</a></li>
            { props.demoLink ? <li><a href={props.demoLink}>Demo</a></li> : null }
        </ul>
        <p>Description</p>
    </div>
)

export default ProjectPage
