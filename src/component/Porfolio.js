import React from 'react'

function Porfolio() {
    return (
        <div>
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some Of My Work</h1>
                        <div id="twelve columns collapsed" className="twelve columns collapsed">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <img src="..." alt="..."/>
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Name</h5>
                                            <p>Description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Porfolio
