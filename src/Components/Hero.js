import React from 'react'

function Content() {
    return (
        <>
            <section className="hero">
                <div className="container flow">
                    <div className="hero__content flow">
                        <h1 className="section-title">Welcome to ReactDev</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsum.<q><b>Edits</b></q>.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur aspernatur, exercitationem nihil sed tempora maxime ullam officia fugit ipsam.</p>
                        <p>Lorem<q><b>Lorem</b></q> Lorem, ipsum dolor.</p>
                        <div className="flex-group">
                            <a href="#featured-articles" className="btn btn--primary">Lorem, ipsum dolor.</a>
                            <a href="./blog" className="btn btn--neutral">Lorem, ipsum dolor.</a>
                        </div>
                    </div>
                    <div>

                        <img src="//unsplash.it/510" alt="" className="hero__image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;
