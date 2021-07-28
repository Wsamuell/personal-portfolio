import React, { useEffect } from 'react';
import Hero from '../Hero'

function Nav(props) {

useEffect(() => {
    document.title = props.currentPage
})

    return (
        <div>
        <header className="flex justify-evenly">
            <nav className="py-12">
                <a href="#about" className="" aria-current="page" onClick={() => props.setCurrentPage("Portfolio.Sam")}>Portfolio.<span className="logo-2">Sam</span></a>
                <a href="#projects" className="" onClick={() => props.setCurrentPage("Projects")}>Projects</a>
            </nav>

            <img className="h-40 w-110 rounded-full" src={require("../../asset/img/mini.png").default} alt="mini" />

            <div className="py-12">
                <a href="#connect" className="" onClick={() => props.setCurrentPage("Connect")}>Connect!</a>
                <a href="#resume" className="" onClick={() => props.setCurrentPage("Resume")}>Resume</a>
            </div>
        </header>
            <Hero />
        </div>

    )
}







export default Nav
