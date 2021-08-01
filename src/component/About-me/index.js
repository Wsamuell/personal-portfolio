import React from 'react';
import Hero from '../Hero'
import '../About-me/style.css'


function About() {

    return (

        <div className="about">
            <Hero />
            <div className='flex flex-wrap w-screen justify-center items-center'>
                <div className='about-paragraph max-w-3xl bg-white shadow-xl rounded-lg my-20'>
                    <div className='md:justify-center -mt-16'>
                        <img className='w-20 h-20 object-cover rounded-full' src={require("../../asset/img/mini.png").default} alt='authors-img' />
                        <h1 className='intro text-center'>Hello There! I'm Sam... Nice to finally meet you</h1>
                    </div>
                    <div className='about-text text-justify'>
                        <p>I've been looking forward to this day, and I've got to say... it was worth the wait</p>
                        <br />
                        <p>I'm a Goal oriented person. I love working towards accomplishing a goal or multiple goals. I don't want to just show up and do something, i want to make a difference no matter how small it is. You just have to start from somewhere </p>
                        <br />
                        <p>I live to laugh. If there is one thing college has thought me, its the fact that it takes 43 muscles to smile. Putting a smile on your face puts a smile on someone elses. Pass it on its contagious. </p>
                        <br />
                        <p>I am a very simple person with big dreams, I have had my share of mistakes but I'll never let that stop me. No matter how big or small my challenge  it i will see it to the end</p>
                        <br />
                        <p>I am a Developer. Full Stack applications are my passion and I'll never let that die out! </p>
                    </div>
                </div>
                <br />
                <article className="flex flex-wrap space-x-4 tools">
                    <div className="text-center  about-paragraph flex-1 bg-white shadow-2xl rounded-lg my-20">
                        <div className='flex justify-center'>
                            <img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/front-end.png").default} alt='ux-img' />
                        </div>
                        <br />
                        <div className="">

                            <p className="tool-title">Front-End</p>
                            <br />
                            <p className=""> value the UX perspective of design because as well all know, that what brings in the customers</p>
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
                                <li>Bulma</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center about-paragraph flex-1 bg-white shadow-2xl rounded-lg my-20">
                        <div className='flex justify-center'>
                            <img className='w-20 h-20 text-center ux-img' src={require("../../asset/img/back-end.png").default} alt='ux-img' />
                        </div>
                        <br />
                        <p className="tool-title">Back-End</p>
                        <br />
                        <p className="">I don't just thieve on the Front-end, we can take it out Back(end)
                        </p>
                        <br />
                        <p className="tool-title-sm"> My Tools</p>
                        <br />

                        <ul>
                            <li>Node.js </li>
                            <li>Express.js</li>
                            <li>NoSql</li>
                            <li>Sql</li>
                            <li>MongoDB</li>
                            <li>Heroku</li>
                        </ul>
                    </div>

                </article>
            </div>

        </div>

    )
}


export default About;