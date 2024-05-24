import { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { random1, random2, random3, random4 } from "../../assets/index";

const images = [random1, random2, random3, random4];

const SlidingWindow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='relative h-screen w-full overflow-hidden'>
      <div className='absolute inset-0 flex justify-between items-center z-10'>
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className='ml-2 md:ml-6 text-2xl text-white hover:text-black hover:shadow-2xl rounded-full p-1 md:p-2'
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className='mr-2 md:mr-6 text-2xl text-white hover:text-black hover:shadow-lg rounded-full p-1 md:p-2'
        >
          <AiOutlineRight />
        </button>
      </div>
      <div className='flex transition-transform duration-1000 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className='object-cover w-full h-full'
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingWindow;
