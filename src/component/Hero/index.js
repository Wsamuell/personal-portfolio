import React from 'react';

function Hero() {

    return (

        <hero class=''>
            <div class='flex justify-evenly'>
                <h2>Front-end, Back-end <span>DEVELOPER</span></h2>
                <p>To new Beginnings...</p>
            </div>
            <div class='flex justify-evenly'>
                <img class='' src={require("../../asset/img/new-begin.png").default} alt='heart-beat-img'/>
            </div>
        </hero>
    )
}


export default Hero;