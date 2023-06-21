import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='py-16' name='contact'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl font-semibold mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Info
        </motion.h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {/* Contact Details */}
          <motion.div
            className='bg-white rounded-lg shadow p-8 mb-8 w-96'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-2xl font-semibold mb-4'>Contact Details</h3>
            <div className='flex items-center mb-2'>
              <FaPhoneAlt className='text-gray-600 mr-2' />
              <p className='text-gray-700'>+1 123-456-7890</p>
            </div>
            <div className='flex items-center mb-2'>
              <FaEnvelope className='text-gray-600 mr-2' />
              <p className='text-gray-700'>info@example.com</p>
            </div>
            <div className='flex items-center'>
              <FaMapMarkerAlt className='text-gray-600 mr-2' />
              <p className='text-gray-700'>123 Main Street, City, State, ZIP</p>
            </div>
            <motion.div
              className='flex justify-center mt-8 mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Social Media Icons */}
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
                <FaLinkedinIn />
              </a>
            </motion.div>
          </motion.div>
          {/* Let's Connect */}
          <div className='w-96 bg-gray-200 py-8 px-4 mb-8 rounded-lg text-center'>
            <h3 className='text-3xl font-semibold mb-4'>Let's Connect!</h3>
            <p className='text-gray-700'>
              Have a question or want to discuss a project? Feel free to reach out to me. I'm always
              excited to collaborate!
            </p>
            <a
              href='mailto:info@example.com'
              className='mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  export default Contact;
  
