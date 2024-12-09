 
import { useEffect, useRef } from "react";
import {  handleScrollEvent, shuffleAndSample } from "./functionTiles";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const MainTiles  = ()=> { 
  const sampleSize = 20; // Adjust as necessary
 const scope = useRef(null)
 useEffect(() => {
    

     
    const pixels3_1 = Array.from(document.querySelectorAll('.track-1-main .pixel'));
    const pixels3_2 = Array.from(document.querySelectorAll('.track-2-main .pixel'));
    const pixels3_3 = Array.from(document.querySelectorAll('.track-3-main .pixel'));
    const pixels3_4 = Array.from(document.querySelectorAll('.track-4-main .pixel'));

    const shuffledPixels3_1 = shuffleAndSample(pixels3_1, sampleSize);
    const shuffledPixels3_2 = shuffleAndSample(pixels3_2, sampleSize);
    const shuffledPixels3_3 = shuffleAndSample(pixels3_3, sampleSize);
    const shuffledPixels3_4 = shuffleAndSample(pixels3_4, sampleSize);
    
    const tracks = [
        { className: "track-1-main", pixels: shuffledPixels3_1, start: "125 95%", end: "175 90%", procent: 1.4 },
        { className: "track-2-main", pixels: shuffledPixels3_2, start: "50 95%", end: "100 90%", procent: 1.5 },
        { className: "track-3-main", pixels: shuffledPixels3_3, start: "-50 95%", end: "0 90%", procent: 1.4 },
        { className: "track-4-main", pixels: shuffledPixels3_4, start: "-125 95%", end: "-75 90%", procent: 1.5 },
    ];
    
      
    
    const scrollTriggers = tracks.map(track => {
      return ScrollTrigger.create({
          trigger: `.${track.className}`,
          start: track.start,
          end: track.end,
          onUpdate: ({ progress }) => handleScrollEvent(track, progress),
          scrub: true
      });
  });

  // Cleanup function
  return () => {
      scrollTriggers.forEach(trigger => trigger.kill());
  };
    
  }, []);
    
    
    return (
<div className="noise-block noise-blockMain" ref={scope}>
    <div className="track track-1-main">
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
    </div>
    <div className="track track-2-main">
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
    </div>
    <div className="track track-3-main">
      <div className="pixel"></div>
      <div className="pixel"></div>
        <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
    <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
    </div>
    <div className="track track-4-main">
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
    </div>
     
  </div>
    )
}
export default MainTiles;

 

