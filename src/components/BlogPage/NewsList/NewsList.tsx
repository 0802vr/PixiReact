import Photo from "@/images/pageBlog/PhotoTopNews.png";
import React, { useState } from "react";
import "./NewsList.scss";
import styles from '@/components/MainPage/Blog/Blog.module.scss';
import Filter from "../Filter/Filter";
import LeftBracket from "../Brackets/LeftBracket";
import RightBracket from "../Brackets/RightBracket";
import { Link } from "react-router-dom";

const newsData = [
  // Категория "News"
  {
    id: 1,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },
  {
    id: 2,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "15 April 2024",
    imageUrl: Photo,
  },
  {
    id: 3,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "16 April 2024",
    imageUrl: Photo,
  },
  {
    id: 4,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "17 April 2024",
    imageUrl: Photo,
  },

  // Категория "Game"
  {
    id: 5,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },
  {
    id: 6,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "15 April 2024",
    imageUrl: Photo,
  },
  {
    id: 7,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "16 April 2024",
    imageUrl: Photo,
  },
  {
    id: 8,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "17 April 2024",
    imageUrl: Photo,
  },

  // Категория "Announce"
  {
    id: 9,
    category: "Announce",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "18 April 2024",
    imageUrl: Photo,
  },
  {
    id: 10,
    category: "Announce",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "19 April 2024",
    imageUrl: Photo,
  },
  {
    id: 11,
    category: "Announce",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "20 April 2024",
    imageUrl: Photo,
  },
  {
    id: 12,
    category: "Announce",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "21 April 2024",
    imageUrl: Photo,
  },

  // Категория "Update"
  {
    id: 13,
    category: "Update",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "18 April 2024",
    imageUrl: Photo,
  },
  {
    id: 14,
    category: "Update",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "19 April 2024",
    imageUrl: Photo,
  },
  {
    id: 15,
    category: "Update",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "20 April 2024",
    imageUrl: Photo,
  },
  {
    id: 16,
    category: "Update",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "21 April 2024",
    imageUrl: Photo,
  },
];

const NewsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleNewsCount, setVisibleNewsCount] = useState<number>(6);
  const [visibleBtn, setVisibleBtn] = useState(false);

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleNewsCount(6);
  };

  const loadMoreNews = () => {
    if(!visibleBtn){
      setVisibleNewsCount(filteredNews.length);
    }
    else 
      setVisibleNewsCount(3);
  };

  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  const visibleNews = filteredNews.slice(0, visibleNewsCount);
  function hideBtn() {
    setVisibleBtn(prev => !prev);
  }
  return (
    <div className="news-list">
      <Filter onFilterChange={handleFilterChange} />
      {visibleNews.map((news) => (
        <Link to='/article' key={news.id} className="news-item">
          <div className="news-text">
            <div className="news-category-container">
              <LeftBracket />
              <span className="news-category">{news.category}</span>
              <RightBracket />
            </div>
            <div className="news-content">
              <h2 className="news-title">{news.title}</h2>
              <p className="news-description">{news.description}</p>
              <p className="news-date">{news.date}</p>
            </div>
          </div>

          <div className="news-image">
            <div className="news-image-container">
              <img src={news.imageUrl} alt={news.title} />
            </div>
          </div>
        </Link>
      ))}
       
      <div className={`${styles.section09BtnBox} ${visibleBtn ? 'see-more-button-hide' : ''} see-more-button`} onClick={loadMoreNews}>           
          <button className={styles.section09BtnSvg} ></button>
          <button className={`${styles.section09Btn} ${visibleBtn ? 'see-more-button-hide-btn': ''}`} onClick={hideBtn}>{visibleBtn ? 'Hide' : 'See more'}</button>          
      </div>
    </div>
  );
};

export default NewsList;
