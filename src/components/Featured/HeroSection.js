import React from 'react'

// data

const HeroSection = (props) => {
    return (
        <div className="py-20">
            <h2 className="text-4xl font-bold mb-2">
                {props.testVariable}
            </h2>
            <h3 className="text-2xl mb-8 max-w-prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum, urna eu finibus laoreet, ipsum felis sagittis diam, ut lacinia libero ipsum eu est. Consectetur adipiscing elit. Proin vestibulum, urna eu finibus laoreet, ipsum felis sagittis diam, ut lacinia libero ipsum eu est.
            </h3>
        </div>
    )
}

export default HeroSection