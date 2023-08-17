import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FeaturesCard } from "@/components/card"; // Update the path as needed
import { IconChevronCompactLeft, IconChevronCompactRight } from '@tabler/icons-react';



function CardCarouselRow() {
  const numberOfCards = 5;
  const cardWidth = 250; // Width of each card in pixels
  const carouselContainerWidth = numberOfCards * cardWidth;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numberOfCards) % numberOfCards);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfCards);
  };

  const cardElements = Array.from({ length: numberOfCards }).map((_, index) => (
    <div key={index} style={{ width: `${cardWidth}px`, marginRight: '1rem' }}>
      <FeaturesCard title="daddy" rating="4.8" image="https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg" />
    </div>
  ));

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
        <button onClick={handlePrevClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <IconChevronCompactLeft size={24} />
        </button>
        
      </div>
      <div style={{ width: `${carouselContainerWidth}px`, overflow: 'hidden' }}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          selectedItem={currentIndex}
          stopOnHover={false}
          emulateTouch={true}
          swipeable={false}
        >
          <div style={{ display: 'flex' }}>
            {cardElements}
          </div>
        </Carousel>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <button onClick={handleNextClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <IconChevronCompactRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default CardCarouselRow;