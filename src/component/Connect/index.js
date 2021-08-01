import React, { useState } from 'react'
import '../Connect/style.css'


function Connect() {

    return (
        <section className='flex flex-col contact w-screen justify-center items-center'>
            <p className='contact-header'>Lets get Connected</p>
            <div className='contact-form flex-wrap max-w-3xl'>
                <div className='object-contain'>
                    <img src={require("../../asset/img/contact-dogs.jpg").default} alt='picture of dogs' />
                </div>
                <p className='contact-text text-center'>Lets admire the dogs together! For any kind of inquires, please feel free to reach out through the platform Below </p>
                <div className='flex flex-col contact-form shadow-2xl rounded-lg  text-center'>
                    <div className='flex flex-row justify-evenly contact-icons'>
                        <a href="mailto:wemsamuel@gmail.com"><img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/gmail.png").default} alt='gmail-icon' /></a>
                        <a href="https://www.linkedin.com/in/samuel-wemimo-567229207/" target="_blank"><img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/linkedin.png").default} alt='linkin-icon' /></a>
                        <a href="https://github.com/Wsamuell" target="_blank"> <img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/github.png").default} alt='github-icon' /></a>
                    </div>
                    <div className='contact-text'>
                        <p>I'm seeking out opportunities to help me grow as a developer and engineer with a company/agencies or individuals that shares the same motive/principles as myself. I would love to bring my high energy and inspiring ideas to help problem solve any task needed while gaining experience to be the best at what i do</p>
                        <br />
                        <p>Im available in office or remotely and also willing to relocate</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connect;