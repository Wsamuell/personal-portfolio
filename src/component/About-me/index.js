import React from 'react';
import Hero from '../Hero'
import '../About-me/style.css'


function About() {

    return (

        <div className="about">
            <Hero />
            <div className='flex flex-wrap w-screen justify-center items-center'>
                <div className='text-justify about-paragraph max-w-2xl bg-white shadow-2xl rounded-lg my-20'>
                    <div className='md:justify-center -mt-16'>
                        <img className='w-20 h-20 object-cover rounded-full' src={require("../../asset/img/mini.png").default} alt='authors-img' />
                    </div>
                    <h1 className='intro'>Hello There! I'm Sam... Nice to finally meet you</h1>
                    <div className='about-text'>
                        <p>Ambitious, courageous, dedicated, and Hardworking</p>
                        <br />
                        <p>These are some of the words used to describe me over my last couple of experiences either as a student or a professional in the industry. I'm willing to put in the time and the effort no one else would all with a smile on my face</p>
                        <br />
                        <p>My prior experiences tells so much about me and my success in many different aspects of service but I don't like to let past experiences define me since life is about growing and developing new skills. Life is about learning and teaching yourself new ways to get to your derived goal</p>
                        <br />
                        <p>I have a modern perspective on life & I love designing contemporary styled products</p>
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
                            <p className="">
                                <br />
                                I value the UX perspective of design because as well all know, that what brings in the customers, for this reason i strive daily to become better at my craft as a front end designer
                            </p>
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