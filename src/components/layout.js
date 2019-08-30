import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Footer from './Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
