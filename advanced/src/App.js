import './App.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'animate.css';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';
import { animateScroll as scroll, Link } from "react-scroll";
import { ProjectPopup } from './components/popup-project';
import Contact from './components/contact';
import Testimonials from './components/testimonials';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navigation Bar */}
      <nav className='bg-gray-800 py-4'>
        <div className='container mx-auto px-4 flex items-center justify-between'>
          <h1 className='text-2xl text-white font-semibold'>Your Name</h1>
          <div className='hidden md:flex md:justify-center space-x-4'>
            <Link
              className='text-white hover:text-gray-400 hover:cursor-pointer transition-colors duration-300'
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
            <Link
              className='text-white hover:text-gray-400 hover:cursor-pointer transition-colors duration-300'
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
            <Link
              className='text-white hover:text-gray-400 hover:cursor-pointer transition-colors duration-300'
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Work
            </Link>

            <Link
              className='text-white hover:text-gray-400 hover:cursor-pointer transition-colors duration-300'
              activeClass='active'
              to='services'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Services
            </Link>

            <Link
              className='text-white hover:text-gray-400 hover:cursor-pointer transition-colors duration-300'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </div>
          <div className='md:hidden z-50'>
            <div className='pl-14 mt-2'>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <HamburgerMenu
                  isOpen={isNavOpen}
                  menuClicked={toggleNav}
                  width={25}
                  height={15}
                  strokeWidth={3}
                  color='white'
                  animationDuration={0.5}
                />
              </motion.div>
            </div>

            {isNavOpen && (
              <div className='fixed inset-0 flex items-center justify-center z-50'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className='absolute top-0 left-0 w-screen h-screen bg-black text-white'
                >
                  <div className='container mx-auto px-4'>
                    <div className='flex justify-end'>
                      <button onClick={closeNav} className='text-white p-4 focus:outline-none'>
                        Close
                      </button>
                    </div>
                    <ul className='py-8 text-center'>
                      <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='py-4'
                      >
                        <Link
                          className='text-white hover:text-gray-400 transition-colors duration-300'
                          activeClass='active'
                          to='home'
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={closeNav}
                        >
                          Home
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='py-4'
                      >
                        <Link
                          className='text-white hover:text-gray-400 transition-colors duration-300'
                          activeClass='active'
                          to='about'
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={closeNav}
                        >
                          About
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='py-4'
                      >
                        <Link
                          className='text-white hover:text-gray-400 transition-colors duration-300'
                          activeClass='active'
                          to='work'
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={closeNav}
                        >
                          Work
                        </Link>
                      </motion.li>

                      <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='py-4'
                      >
                        <Link
                          className='text-white hover:text-gray-400 hover:cursor-pointer transition-colors duration-300'
                          activeClass='active'
                          to='services'
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={closeNav}
                        >
                          Services
                        </Link>
                      </motion.li>

                      <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='py-4'
                      >
                        <Link
                          className='text-white hover:text-gray-400 transition-colors duration-300'
                          activeClass='active'
                          to='contact'
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={closeNav}
                        >
                          Contact
                        </Link>
                      </motion.li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className='flex-grow flex items-center justify-center'>
        <div className='text-center content-center flex flex-col'>
          <h2 className='text-4xl font-semibold mb-4 mt-10' name='home'>
            Welcome to My Portfolio
          </h2>
          <img
            src='/images/profile-image.jpg'
            alt='Profile'
            className='w-20 h-20 flex self-center rounded-full animate__animated animate__bounceIn mb-4 sm:mb-0'
          />
          <p className='text-lg text-gray-700'>I am a passionate photographer.</p>
          <motion.div
            className='flex justify-center mt-8 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href='https://twitter.com/your-twitter'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-300 mx-2'
            >
              <FaTwitter />
            </a>
            <a
              href='https://www.instagram.com/your-instagram'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-gray-800 hover:text-pink-500 transition-colors duration-300 mx-2'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/your-linkedin'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-gray-800 hover:text-blue-700 transition-colors duration-300 mx-2'
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className='bg-gray-100 py-16' name='about'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-4xl font-semibold mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className='text-lg text-gray-700'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a photographer with expertise in wedding photos. I love capturing special moments
            and creating timeless memories for my clients. My goal is to deliver stunning and
            emotive photographs that truly reflect the beauty and joy of each occasion. With my
            passion for storytelling and attention to detail, I strive to create visually appealing
            and meaningful images that leave a lasting impression. Let's work together to capture
            your precious moments!
          </motion.p>
        </div>
      </section>

      {/* Work Section */}
      <section className='py-16' name='work'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-4xl font-semibold mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.h2>
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
              {/* Project Card */}
              <div
                className='bg-white rounded-lg shadow p-8'
                onClick={() => setSelectedProject('project1')}
              >
                <img
                  src={'./images/project1Image.jpg'}
                  alt='Project 1'
                  className='mb-4 rounded-lg '
                />
                <h3 className='text-xl font-semibold mb-4'>Project 1</h3>
                <p className='text-gray-700'>Description of Project 1</p>
              </div>

              {/* Project Card */}
              <div
                className='bg-white rounded-lg shadow p-8'
                onClick={() => setSelectedProject('project2')}
              >
                <img
                  src={'./images/project2Image.jpg'}
                  alt='Project 2'
                  className='mb-4 rounded-lg'
                />
                <h3 className='text-xl font-semibold mb-4'>Project 2</h3>
                <p className='text-gray-700'>Description of Project 2</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <ProjectPopup selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      )}

      {/* Testimonials Section */}
      <Testimonials />

      {/* /* Services Section */}
      <section className='bg-gray-100 py-16' name='services'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-4xl font-semibold mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.h2>
          <div className='flex flex-wrap justify-center'>
            {/* Service Card */}
            <div className='bg-white rounded-lg shadow p-8 mx-4 mb-8 w-72'>
              <h3 className='text-xl font-semibold mb-4'>Wedding Photography</h3>
              <p className='text-gray-700'>
                Capture the unforgettable moments of your special day with our professional wedding
                photography package. We offer full-day coverage, multiple photographers,
                high-resolution digital images, and a beautifully designed photo album. Prices start
                at $1500.
              </p>
            </div>

            {/* Service Card */}
            <div className='bg-white rounded-lg shadow p-8 mx-4 mb-8 w-72'>
              <h3 className='text-xl font-semibold mb-4'>Portrait Photography</h3>
              <p className='text-gray-700'>
                Showcase your unique personality and style with our portrait photography session.
                Whether it's a professional headshot, family portrait, or individual photoshoot, we
                ensure a comfortable and enjoyable experience. Prices start at $250 for a 1-hour
                session.
              </p>
            </div>

            {/* Service Card */}
            <div className='bg-white rounded-lg shadow p-8 mx-4 mb-8 w-72'>
              <h3 className='text-xl font-semibold mb-4'>Event Photography</h3>
              <p className='text-gray-700'>
                Preserve the memories of your special events such as birthdays, anniversaries, and
                corporate gatherings with our event photography service. We capture the essence and
                emotions of the occasion, providing you with high-quality images to cherish. Prices
                start at $300 per hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <footer className='bg-gray-800 py-4'>
        <div className='container mx-auto px-4'>
          <p className='text-gray-400 text-center'>© 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
};

export default App;
