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
                    <div className='flex flex-row justify-evenly text-center'>
                        <a href="mailto:wemsamuel@gmail.com"><img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/gmail.png").default} alt='gmail-icon' /></a>
                        <a href="https://www.linkedin.com/in/samuel-wemimo-567229207/" target="_blank"><img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/linkedin.png").default} alt='linkin-icon' /></a>
                        <a href="https://github.com/Wsamuell" target="_blank"> <img className='w-20 h-20 text-center ux-img object-center' src={require("../../asset/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
            </div>
        </footer>

    )
}







export default Footer
