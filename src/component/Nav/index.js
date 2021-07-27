import React, { useEffect } from 'react';
import Hero from '../Hero'

function Nav(props) {
    return (
        <div>
        <header className="flex justify-evenly">
            <nav className="">
                <a href="/" className="nav" aria-current="page">Portfolio.<span className="logo-2">Sam</span></a>
                <a href="#projects" className="nav" onClick={() => props.setCurrentPage("Projects")}>Projects</a>
            </nav>

            <img className="h-40 w-110 rounded-full" src={require("../../asset/img/mini.png").default} alt="mini" />

            <div className="">
                <a href="#connect" className="nav" onClick={() => props.setCurrentPage("Connect")}>Connect!</a>
                <a href="#resume" className="nav" onClick={() => props.setCurrentPage("Resume")}>Resume</a>
            </div>
        </header>
            <Hero />
        </div>

    )
}







export default Nav
