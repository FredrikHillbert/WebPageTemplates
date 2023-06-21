import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const ProjectPopup = ({ selectedProject, setSelectedProject }) => {
  const handleClose = () => {
    setSelectedProject(null);
  };

  const images = [
    '/images/project1Image.jpg',
  ];

  const isMobile = window.innerWidth <= 768;
 
 

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg p-8 overflow-hidden w-full max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">{selectedProject}</h2>

        <Carousel
          emulateTouch={!isMobile}
          centerSlidePercentage={100}
          selectedItem={0}
          className="mb-4"
          swipeScrollTolerance={5} // Adjust swipe sensitivity as needed
        >
          {images.map((imageUrl, index) => (
            <div key={index} className="flex justify-center">
              <img src={imageUrl} alt={`Project ${index}`} className="rounded-lg max-h-96" />
            </div>
          ))}
        </Carousel>

        <div>
          <h3 className="text-lg font-semibold mb-2">Project Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus augue. Nullam id sodales neque,
            sed aliquet diam.
          </p>
        </div>

        <button
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

  