import React from 'react'

import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Dominic Abela</h1>
                    <h3>Student - Software Engineer - Artist</h3>
                </div>
                <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/dominic-abela/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/dominicabela" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:abelad@cua.edu" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
            </header>
        )
    }
}

export default Header
