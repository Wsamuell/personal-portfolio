import React, { useEffect } from 'react';
import '../Nav/style.css'
function Nav(props) {

    useEffect(() => {
        document.title = props.currentPage
    })

    return (
        <header className="flex justify-evenly">
            <nav className="py-12 space-x-8 md:space-x-40 sm:space-x-1">
                    <a href="/" className="" aria-current="page" onClick={() => props.setCurrentPage("Portfolio.Sam")}>Portfolio.<span className="logo-2">Sam</span></a>
                    <a href="#projects" className="" onClick={() => props.setCurrentPage("Projects")}>Projects</a>
            </nav>

            <img className="h-40 w-110 rounded-full ring-4 ring-yellow-500 ring-opacity-81" src={require("../../asset/img/mini.png").default} alt="mini" />

            <div className="py-12 space-x-20">
                <a href="#connect" className="" onClick={() => props.setCurrentPage("Connect")}>Connect!</a>
                <a href="https://docs.google.com/document/d/1oIL6i7CuC1ZKXQhqjkA-LfXXpfh7NwebFpkGk8bAbF4/edit?usp=sharing" target="_blank" className="">Resume</a>
            </div>
        </header>

    )
}







export default Nav
