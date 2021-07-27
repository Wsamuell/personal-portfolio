import React from 'react';

function About() {

    return (

        <div className="">
            <div className='about-paragraph flex justify-evenly'>
                <img className='h-60' src={require("../../asset/img/main.png").default} alt='authors-img' />
                <div>
                    <h2>Hello There! I'm Samuel. Nice you finally meet you</h2>
                    <p>Ambitious, courageous, dedicated, and Hardworking</p>
                    <p>These are some of the words used to describe me over my last couple of experiences either as a student or a professional in the industry. I'm willing to put in the time and the effort no one else would all with a smile on my face</p>
                    <p>My prior experiences tells so much about me and my success in many different aspects of service but I don't like to let past experiences define me since life is about growing and developing new skills. Life is about learning and teaching yourself new ways to get to your derived goal</p>
                    <p>I have a modern perspective on life & I love designing contemporary styled products</p>
                    <p>Im available in office or remotely and also available to relocate</p>
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
    )
}


export default About;