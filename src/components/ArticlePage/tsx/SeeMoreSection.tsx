import "../scss/SeeMoreSection.scss";
import LeftBracket from "@/uiKit/LeftBracket";
import RightBracket from "@/uiKit/RightBracket";
import PhotoTop from '@/images/pageArticle/PhotoTop.png'
const newsList = [
  {
    id: 1,
    category: "News",
    title: "Immersive Experience Design: Expert Insights and Techniques",
    date: "14 April 2024",
    imageUrl: PhotoTop,
  },
  {
    id: 2,
    category: "News",
    title: "Immersive Experience Design: Expert Insights and Techniques",
    date: "15 April 2024",
    imageUrl: PhotoTop,
  },
];

const SeeMoreSection = () => {
  return (
    <section className="see-more-section">
      <span className="see-more-label">See more</span>
      <div className="see-more-news-list">
        {newsList.map((news) => (
          <article key={news.id} className="see-more-news-item">
            <div className="see-more-image-container">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="see-more-image"
              />
            </div>
            <header className="see-more-header">
              <div className="see-more-category-container">
                <LeftBracket />
                <span className="see-more-category">{news.category}</span>
                <RightBracket />
              </div>
              <h2 className="see-more-title">{news.title}</h2>
            </header>
            <time className="see-more-date">{news.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SeeMoreSection;
