import React from 'react';
import '../Footer/style.css'



function Footer() {

    return (
        <footer className="footer bg-white relative pt-1 border-b-2 ">
            <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-6">
                    <p className=" font-bold mb-2">
                        © 2021 Created and styled by <span>Samuel O.</span>
                    </p>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <a href="mailto:wemsamuel@gmail.com"><img className='w-20 h-20' src={require("../../asset/img/gmail.png").default} alt='gmail-icon' /></a>
                    <a href="https://www.linkedin.com/in/samuel-odubamowo-567229207/" target="_blank"><img className='w-20 h-20 ux-img' src={require("../../asset/img/linkedin.png").default} alt='linkedin-icon' /></a>
                    <a href="https://github.com/Wsamuell" target="_blank"> <img className='w-20 h-20 ux-img' src={require("../../asset/img/github.png").default} alt='github-icon' /></a>
                </div>
            </div>
        </footer>

    )
}







export default Footer
