import React from 'react';
import Hero from '../Hero'
import '../About-me/style.css'


function About() {

    return (

        <div className="about">
            <Hero />
            <div className='flex flex-wrap w-screen justify-center items-center'>
                <p className='name'>Samuel Odubamowo</p>
                <article className="flex flex-wrap space-x-4 tools">
                    <div className="text-center  about-paragraph flex-1 bg-white shadow-2xl rounded-lg my-20">
                        <div className='flex justify-center'>
                            <img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/front-end.png").default} alt='ux-img' />
                        </div>
                        <div className="">

                            <p className="tool-title">Front-End</p>
                            <br />
                            <p className=""> I value the UX/UI perspective design of a website because as well all know, thats what brings in the customers. I am all about numbers and goals so if the users are happy my job is a lot easier</p>
                            <br />
                            <p className="tool-title-sm">My Tools</p>
                            <br />
                            <ul>
                                <li>React.Js</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Handlebars</li>
                                <li>TailwindCSS</li>
                                <li>Bulma CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center about-paragraph flex-1 bg-white shadow-2xl rounded-lg my-20">
                        <div className='flex justify-center'>
                            <img className='w-20 h-20 text-center ux-img' src={require("../../asset/img/back-end.png").default} alt='ux-img' />
                        </div>
                        <p className="tool-title">Back-End</p>
                        <br />
                        <p className="">What would a structure be without its bones, the backend is a vigorous part of my stack. I am well versed in many backend entities  and I am always up for a challenge to learn new things to add to my stack
                        </p>
                        <br />
                        <p className="tool-title-sm"> My Tools</p>
                        <br />

                        <ul>
                            <li>GraphQL</li>
                            <li>Node.js </li>
                            <li>Express.js</li>
                            <li>NoSql</li>
                            <li>MySql</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>

                </article>
                <div className='about-paragraph max-w-3xl bg-white shadow-xl rounded-lg my-20'>
                    <div className='md:justify-center -mt-16'>
                        <img className='w-20 h-20 object-cover rounded-full' src={require("../../asset/img/mini.png").default} alt='authors-img' />
                        <h1 className='intro text-center'>Hello There! I'm Sam... Nice to finally meet you</h1>
                    </div>
                    <div className='about-text text-justify'>
                        <p>I've been looking forward to this day, and I've got to say... it was worth the wait</p>
                        <br />
                        <p>I am a promising young developer in the industry looking to make some noise. I am 25 years old out of Phoenix Arizona</p>
                        <br />
                        <p>I love playing videos games, watching sports, hiking, and learning new things </p>
                        <br />
                        <p>I'm a goal-oriented person who loves working towards accomplishing a goal or multiple goals. I don't want to just show up, I want to make a difference no matter how small it is. You just have to start from somewhere </p>
                        <br />
                        <p>I love to laugh. If there is one thing college has taught me, it's the fact that it takes 43 muscles to smile. Putting a smile on your face puts a smile on someone elses. Pass it on, it's contagious.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default About;