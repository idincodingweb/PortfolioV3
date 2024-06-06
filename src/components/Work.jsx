import React from 'react';

const WorkSection = () => {
  const images = [
    'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
    'https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg',
    'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
    'https://images.pexels.com/photos/840719/pexels-photo-840719.jpeg',
    'https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg',
    'https://images.pexels.com/photos/4115453/pexels-photo-4115453.jpeg',
  ];

  return (
    <section>
      <div className="work-section-container">
        <h2>My Work</h2>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
