import React, { useEffect } from 'react';
import '../Nav/style.css'
function Nav(props) {

    useEffect(() => {
        document.title = props.currentPage
    })

    return (
        <header className="flex justify-between md:flex-grow-0 sm:items-center sm:flex-col">
                <a href="#about" className="" aria-current="page" onClick={() => props.setCurrentPage("About")}>Portfolio.<span className="">Sam</span></a>
                <a href="#projects" className="" onClick={() => props.setCurrentPage("Projects")}>Projects</a>

                <img className="rounded-full center-img" src={require("../../asset/img/main.png").default} alt="mini" />

                <a href="#connect" className="" onClick={() => props.setCurrentPage("Connect")}>Connect!</a>
                <a href="https://docs.google.com/document/d/1oIL6i7CuC1ZKXQhqjkA-LfXXpfh7NwebFpkGk8bAbF4/edit?usp=sharing" target="_blank" className="bg-yellow-500 hover:bg-yellow-200 rounded-lg resume-link">Resume</a>
        </header>

    )
}







export default Nav
