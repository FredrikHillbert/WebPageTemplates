import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './App.css';
import { ProjectPopup } from './components/project-popup';
import { useState } from 'react';
import Contact from './components/contact';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl text-white font-semibold">Your Name</h1>
          <div className="flex space-x-4">
            {/* Twitter Icon */}
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-400 transition-colors duration-300 text-xl" />
            </a>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-400 transition-colors duration-300 text-xl" />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-gray-400 transition-colors duration-300 text-xl" />
            </a>
          </div>
        </div>
      </header>

      {/* General Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8">About Me</h2>
          <div className="flex flex-col sm:flex-row items-center mb-8">
            <img
              src="/images/profile-image.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full mb-4 sm:mr-4 sm:mb-0"
            />
            <p className="text-lg text-gray-700">
              Welcome to my portfolio! I am a passionate web developer with expertise in React.js
              and Tailwind CSS. I strive to create clean and elegant designs combined with engaging
              user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" name="work">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            My Work
          </h2>
          <div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Project Card */}
              <div
                className="bg-white rounded-lg shadow p-8"
                onClick={() => setSelectedProject('project1')}>
                <img
                  src={'./images/project1Image.jpg'}
                  alt="Project 1"
                  className="mb-4 rounded-lg "
                />
                <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                <p className="text-gray-700">Description of Project 1</p>
              </div>

              {/* Project Card */}
              <div
                className="bg-white rounded-lg shadow p-8"
                onClick={() => setSelectedProject('project2')}>
                <img
                  src={'./images/project2Image.jpg'}
                  alt="Project 2"
                  className="mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                <p className="text-gray-700">Description of Project 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectPopup selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      )}

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-center">© 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
