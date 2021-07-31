import React, { useState } from 'react'

function Connect() {

    return (
        <section className='flex justify-evenly'>
            <form id='contact-form'>
                <p>Contact</p>
                <p>I'm seeking out opportunities to help me grow as a developer and engineer with a company/agencies or individuals. I would love to bring my high energy and inspiring ideas to help problem solve any task needed while gaining experience to be the best at what i do</p>
                <br />
                <p>Im available in office or remotely and also available to relocate</p>
                <p>For any kind of inquires, please feel free to reach out through the platform below </p>

                <div>
                    <a href="mailto:wemsamuel@gmail.com"> Wemsamuel@gmail.com</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/samuel-wemimo-567229207/" target="_blank"> Linkedin</a>
                </div>
                <div>
                    <a href="https://github.com/Wsamuell" target="_blank"> Github</a>
                </div>

            </form>
        </section>
    )
}

export default Connect;