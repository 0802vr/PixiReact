import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleScrollEvent, shuffleAndSample } from './functionTiles';

const FooterTile = () => {
    const sampleSize = 20;
    const scope = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        });

        if (scope.current) {
            observer.observe(scope.current);
        }

        return () => {
            if (scope.current) {
                observer.unobserve(scope.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Не запускаем анимацию, если элемент не виден

        const pixels2_1 = Array.from(document.querySelectorAll('.noise-blockFooter .track-1-footer .pixel'));
        const pixels2_2 = Array.from(document.querySelectorAll('.noise-blockFooter .track-2-footer .pixel'));
        const pixels2_3 = Array.from(document.querySelectorAll('.noise-blockFooter .track-3-footer .pixel'));
        const pixels2_4 = Array.from(document.querySelectorAll('.noise-blockFooter .track-4-footer .pixel'));

        const shuffledPixels2_1 = shuffleAndSample(pixels2_1, sampleSize);
        const shuffledPixels2_2 = shuffleAndSample(pixels2_2, sampleSize);
        const shuffledPixels2_3 = shuffleAndSample(pixels2_3, sampleSize);
        const shuffledPixels2_4 = shuffleAndSample(pixels2_4, sampleSize);

        const tracks = [
            { className: "track-1-footer", pixels: shuffledPixels2_1, start: "300 95%", end: "350 90%", procent: 1.4 },
            { className: "track-2-footer", pixels: shuffledPixels2_2, start: "200 95%", end: "250 90%", procent: 1.5 },
            { className: "track-3-footer", pixels: shuffledPixels2_3, start: "100 95%", end: "150 90%", procent: 1.4 },
            { className: "track-4-footer", pixels: shuffledPixels2_4, start: "0 95%", end: "50 90%", procent: 1.5 },
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
    }, [isVisible, location]);

    return (
<div className="noise-block noise-blockFooter" ref={scope}>
    <div className="track track-1-footer">
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
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
    <div className="track track-2-footer">
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
         <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
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
    <div className="track track-3-footer">
      <div className="pixel"></div>
      <div className="pixel"></div>
        <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
    <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
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
    <div className="track track-4-footer">
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
      <div className="pixel"></div>
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
export default FooterTile;

 
