import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Testimonials() {

    const isMobile = window.innerWidth <= 768;
   
    return (
        <section className="bg-gray-200 py-16" name="testimonials">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Carousel  
            className="mb-4 w-full justify-center md:w-1/2"
            swipeScrollTolerance={5}
            showIndicators={false}
            centerSlidePercentage={isMobile ? 100 : 50}
            autoPlay
            showThumbs={false}
            centerMode={true}
            >
            
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg flex flex-col justify-center shadow p-8 md:ml-4 ">
              <h3 className="text-xl font-semibold mb-4">Client Name</h3>
              <p className="text-gray-700">
                "I had the pleasure of working with Your Name for my wedding
                photos, and I couldn't be happier with the results. They captured
                every special moment beautifully, and the photos truly reflect
                the joy and love of the day. I highly recommend Your Name for any
                photography needs!"
              </p>
            </div>
  
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg flex flex-col justify-center shadow p-8 md:ml-4 ">
              <h3 className="text-xl font-semibold mb-4">Client Name</h3>
              <p className="text-gray-700">
                "Your Name is a talented photographer with an incredible eye for
                detail. They were able to capture the essence of our event and
                create stunning images that we will cherish forever. Their
                professionalism and passion for their craft shine through in
                every photo. We are extremely satisfied with their work!"
              </p>
            </div>
           
           
            <div className="bg-white rounded-lg flex flex-col justify-center shadow p-8 md:ml-4">
              <h3 className="text-xl font-semibold mb-4">Client Name</h3>
              <p className="text-gray-700">
                "Your Name is a talented photographer with an incredible eye for
                detail. They were able to capture the essence of our event and
                create stunning images that we will cherish forever. Their
                professionalism and passion for their craft shine through in
                every photo. We are extremely satisfied with their work!"
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col justify-center shadow p-8 md:ml-4">
              <h3 className="text-xl font-semibold mb-4">Client Name</h3>
              <p className="text-gray-700">
                "I had the pleasure of working with Your Name for my wedding
                photos, and I couldn't be happier with the results. They captured
                every special moment beautifully, and the photos truly reflect
                the joy and love of the day. I highly recommend Your Name for any
                photography needs!"
              </p>
            </div>
        
            </Carousel>
          </motion.div>
        </div>
      </section>
    )
}