import {  useEffect, useRef } from "react";
import { handleScrollEvent, shuffleAndSample } from "./functionTiles";

const PlanetTile  = ()=> { 
  const sampleSize = 20; // Adjust as necessary
  const scope = useRef(null)
  useEffect(() => {
   
    const pixels1_1 = Array.from(document.querySelectorAll('.noise-blockFirst .track-1 .pixel'));
    const pixels1_2 = Array.from(document.querySelectorAll('.noise-blockFirst .track-2 .pixel'));
    const pixels1_3 = Array.from(document.querySelectorAll('.noise-blockFirst .track-3 .pixel'));
    const pixels1_4 = Array.from(document.querySelectorAll('.noise-blockFirst .track-4 .pixel'));

    const shuffledPixels1_1 = shuffleAndSample(pixels1_1, sampleSize);
    const shuffledPixels1_2 = shuffleAndSample(pixels1_2, sampleSize);
    const shuffledPixels1_3 = shuffleAndSample(pixels1_3, sampleSize);
    const shuffledPixels1_4 = shuffleAndSample(pixels1_4, sampleSize);

    const tracks = [
        { className: "track-1", pixels: shuffledPixels1_1, start: "300 95%", end: "350 90%", procent: 1.4 },
        { className: "track-2", pixels: shuffledPixels1_2, start: "200 95%", end: "250 90%", procent: 1.5 },
        { className: "track-3", pixels: shuffledPixels1_3, start: "100 95%", end: "150 90%", procent: 1.4 },
        { className: "track-4", pixels: shuffledPixels1_4, start: "0 95%", end: "50 90%", procent: 1.5 }
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
    <div className="noise-block noise-blockFirst" ref={scope}>
      <div className="track track-1">
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
      <div className="track track-2">
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
      <div className="track track-3">
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
      <div className="track track-4">
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
export default PlanetTile;