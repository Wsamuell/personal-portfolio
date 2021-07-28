import React from 'react';

function Hero() {

    return (

        <hero className=''>
            <div className='flex justify-evenly'>
                <h2>Front-End ... Back-End <span className='ho-dev'>DEVELOPER</span></h2>
                <p>To new Beginnings...</p>
            </div>
            <div className='flex justify-evenly'>
                <img className='' src={require("../../asset/img/new-begin.png").default} alt='heart-beat-img'/>
            </div>
        </hero>
    )
}


export default Hero;