import React from 'react';
import Hero from '../Hero'
import '../About-me/style.css'


function About() {

    return (

        <div className="about">
            <Hero />
            <div className='flex flex-col w-screen justify-center items-center'>
                <div className='text-justify about-paragraph max-w-2xl bg-white shadow-lg rounded-lg my-20'>
                    <div className='md:justify-end -mt-16'>
                        <img className='w-20 h-20 object-cover rounded-full' src={require("../../asset/img/mini.png").default} alt='authors-img' />
                    </div>
                    <h1 className='intro'>Hello There! I'm Sam... Nice you finally meet you</h1>
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
                <article className="flex justify-evenly">
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                Front-end
                            </p>
                            <p className="">
                                I value the UX perspective of design because as well all know, that what brings in the customers, for this reason i strive daily to become better at my craft as a front end designer
                            </p>
                            <p className="font-medium">
                                My Tools
                            </p>
                            <ul>
                                <li>
                                    React.Js
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    CSS
                                </li>
                                <li>
                                    Bootstrap
                                </li>
                                <li>
                                    Handlebars
                                </li>
                                <li>
                                    TailwindCSS
                                </li>
                                <li>
                                    Bulma
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                Back-end
                            </p>
                            <p className="">
                                I dont just thieve on the Front-end, we can take it out back too
                            </p>
                            <p className="font-medium">
                                My Tools
                            </p>
                            <ul>
                                <li>
                                    Node.js
                                </li>
                                <li>
                                    Express.js
                                </li>
                                <li>
                                    NoSql
                                </li>
                                <li>
                                    Sql
                                </li>
                                <li>
                                    MongoDB
                                </li>
                                <li>
                                    Heroku
                                </li>
                            </ul>
                        </div>
                    </div>

                </article>
                <a href="https://docs.google.com/document/d/1oIL6i7CuC1ZKXQhqjkA-LfXXpfh7NwebFpkGk8bAbF4/edit?usp=sharing" target="_blank"> My Resume!</a>
            </div>
        </div>

    )
}


export default About;