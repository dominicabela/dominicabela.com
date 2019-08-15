import React, { Component } from 'react'

import {
    Timeline,
    Content,
    ContentYear,
    ContentBody,
    Description
  } from 'vertical-timeline-component-react'
   
class VerticalTimeline extends Component {
    render() {
        return(
            <Timeline>
                <Content>
                    <ContentYear year="2019" />
                    <ContentBody title="Robotics Software Engineering Intern">
                        <Description text="Noblis" />
                        <Description text="• Description" />
                    </ContentBody>
                </Content>
                <Content>
                    <ContentYear year="2019" />
                    <ContentBody title="Software Engineering Co-op Intern">
                        <Description text="FTS International" />
                        <Description text="• Description" />
                    </ContentBody>
                </Content>
                <Content>
                    <ContentYear year="2018" />
                    <ContentBody title="Software Engineering Intern">
                        <Description text="FTS International" />
                        <Description text="• Developed a responsive web interface capable of efficiently visualizing satellite scheduling of 10,000+ tasks and dynamic 3D satellite orbits" />
                        <Description text="• Presented completed satellite project to potential government customers" />
                        <Description text="• Designed and built web application for visualizing sentiment analysis of Twitter data" />
                        <Description text="• Technologies used: React, Redux, Cesium, Amazon Web Services (Lambda, API Gateway, S3)" />
                    </ContentBody>
                </Content>
            </Timeline>
        )
    }
}

  export default VerticalTimeline