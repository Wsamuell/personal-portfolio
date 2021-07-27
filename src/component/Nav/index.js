import React from 'react';

function Nav() {

    return (
        <header class="flex justify-evenly">
            <nav class="">
                <a href="/" class="" aria-current="page">Portfolio.<span class="logo-2">Sam</span></a>
                <a href="#projects" class="">Projects</a>
            </nav>

            <img class="h-40 w-110 rounded-full" src={require("../../asset/img/mini.png").default} alt="mini" />

            <div class="">
                <a href="#" class="">Connect!</a>
                <a href="#" class="">Resume</a>
            </div>
        </header>

    )
}







export default Nav
