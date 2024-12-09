import React, { useState, useEffect } from "react";
import LeftBracket from "../Brackets/LeftBracket";
import RightBracket from "../Brackets/RightBracket";
import Photo from "@/images/pageBlog/PhotoTopNews.png";
import Photo2 from "@/images/pageBlog/image 251.png";
import Photo3 from "@/images/pageBlog/image 253.png";
import "./TopNewsBlock.scss";

const TopNewsBlock: React.FC = () => {
  const data = [
    {
      id: 1,
      category: "News",
      title: "CLOSED BETA TEST PEEXI PUNK",
      description:
        "We are pleased to announce the start of the closed beta test of Peexi Punk. And today we will tell you what awaits you",
      date: "05 September 2024",
      image: Photo,
    },
    {
      id: 2,
      category: "Game",
      title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
      description:
        "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
      date: "12 April 2024",
      image: Photo2,
    },
    {
      id: 3,
      category: "Update",
      title: "CLOSED BETA TEST PEEXI PUNK",
      description:
        "We are pleased to announce the start of the closed beta test of Peexi Punk. And today we will tell you what awaits you",
      date: "30 May 2024",
      image: Photo3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideDuration = 5000;
    const intervalDuration = slideDuration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        return 0;
      });
    }, intervalDuration);

    if (progress === 100) {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }

    return () => clearInterval(interval);
  }, [progress, data.length]);

  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="top-news-block">
      <div className="left-news">
        <div className="top-news-content">
          <div className="category">
            <LeftBracket />
            <span className="top-news-category">
              {data[currentSlide].category}
            </span>
            <RightBracket />
          </div>
          <h2 className="top-news-title">{data[currentSlide].title}</h2>
          <p className="top-news-description">
            {data[currentSlide].description}
          </p>
        </div>
        <div className="top-news-date-container">
          <p className="top-news-date">{data[currentSlide].date}</p>
        </div>
      </div>

      <div className="right-news">
        <div className="slider-container">
          <img
            className="slide"
            src={data[currentSlide].image}
            alt="{data[currentSlide].title}"
          />
          <div className="slider-indicators">
            {data.map((_, index) => {
              let fillWidth = 0;
              if (index < currentSlide) {
                fillWidth = 100;
              } else if (index === currentSlide) {
                fillWidth = progress;
              } else {
                fillWidth = 0;
              }
              return (
                <span
                  key={index}
                  className="indicator"
                  onClick={() => handleIndicatorClick(index)}
                >
                  <span
                    className="indicator-fill"
                    style={{ width: `${fillWidth}%` }}
                  ></span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewsBlock;
