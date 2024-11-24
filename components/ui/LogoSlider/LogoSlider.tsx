"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import classes from './LogoSlider.module.css';

const LogoSlider = ({ clientsContent }: { clientsContent: any[] }) => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Clone slide for seamless scrolling
  useEffect(() => {
    const slide = slideRef.current;
    const container = containerRef.current;
    
    if (!slide || !container) return;
    
    const cloneSlide = slide.cloneNode(true) as HTMLElement;
    container.appendChild(cloneSlide);
    
    const handleScroll = () => {
      // When the first slide leaves the container, reset the scroll position to create an infinite loop
      if (container.scrollLeft >= slide.offsetWidth) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [clientsContent]);

  return (
    <section className={classes.container} ref={containerRef}>
      <div className={classes.logosSlide} ref={slideRef}>
        {clientsContent.map((client, i) => (
          <Image
            key={i}
            src={client.attributes.clientImage}
            alt={client.attributes.clientName}
            className={classes.logo}
            width={100}
            height={100}
          />
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
