import React from 'react';
import '../Hero/style.css'

function Hero() {

    return (

        <section className='hero'>
            <div className=''>
                <h2 className='flex justify-evenly hero-top sm:flex-col sm:items-center'>Front-End ... Back-End <span className='ho-dev'>DEVELOPER</span></h2>
            </div>
            <div className='flex justify-evenly'>
                <video className='' autoPlay loop muted>
                    <source src={require("../../asset/img/Golden.mp4").default} type='video/mp4' />
                </video>
            </div>
            <div className='flex justify-evenly'>
                <p className='hero-bottom'>To new Beginnings...</p>
            </div>
        </section>
    )
}


export default Hero;