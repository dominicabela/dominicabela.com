import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: '"Alpine"', description: 'Oil on canvas.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: '"Tidal Basin"', description: 'Oil on canvas.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: '"Jefferson"', description: 'Watercolor.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: '"Wanderer"', description: 'Pyrography on wood.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: '"Venice Canal"', description: 'Pen and ink.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: '"San Giorgio Maggiore"', description: 'Pen and ink.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Dominic Abela"
        const siteDescription = "Developer Portfolio"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>Short Summary</p>
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>Projects</h2>
                        </header>

                    </section>

                    <section id="three">
                        <header className="major">
                            <h2>Artwork</h2>
                        </header>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="four">
                        <h5>© {new Date().getFullYear()} Dominic Abela</h5>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex