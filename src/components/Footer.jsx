import logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Footer = () => {
    return <>
        <footer className="bg-gradient-to-r from-gray-950 to-zinc-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="panel" smooth={true} duration={500} className="flex items-center cursor-pointer">
                    <img src={logo} className="h-8 me-3" alt="Portfolio Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bhavesh Ittadwar</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    {/* Resources */}
                    <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigate</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link to="skills" smooth={true} duration={500} className="hover:underline">Skills</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="education" smooth={true} duration={500} className="hover:underline">Education</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="experience" smooth={true} duration={500} className="hover:underline">Experience</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className="hover:underline">Projects</Link>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                        <a href="https://github.com/bhaveshittadwar" target='_blank' className="hover:underline ">Github</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/bhavesh-ittadwar/" target='_blank' className="hover:underline">LinkedIn</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://bhavesh-ittadwar.vercel.app/" className="hover:underline">Bhavesh Ittadwar™</a>. All Rights Reserved.</span>
                </div>
            </div>
            </footer>
    </>    
}

export default Footer