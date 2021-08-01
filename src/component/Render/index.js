import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About-me';
import Connect from '../Connect';
import Projects from '../Projects'


function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Portfolio.Sam':
                return <About />;
            case 'Connect':
                return <Connect />;
            case 'Projects':
                return <Projects />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div>{renderPage(currentPage)}</div>
        </div>
    )
}


export default Portfolio;