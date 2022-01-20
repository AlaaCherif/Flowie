import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1',
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2',
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3',
  },
];

const Slideshow = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
      }}
      className='slide-container'
    >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className='each-slide' key={index}>
            <div
              style={{
                backgroundImage: `url(https://assets.architecturaldigest.in/photos/600821b6a28465f75014ba7c/16:9/w_2560%2Cc_limit/Indoor-plants-and-flowers-summer-garden-1366x768.jpg)`,
                height: '768px',
                width: '1365px',
                backgroundPosition: 'center center',
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
