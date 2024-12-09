import "../scss/TopImage.scss";
import PhotoTop from '@/images/pageArticle/PhotoTop.png'
import { articleData } from "./ArticleDate";
import Line from '@/images/pageArticle/line.svg'
import { Link } from "react-router-dom";

const TopImage = () => {
  const article = articleData[0];
  return (
    <>
      <Link className="article_btn_back" to='/blog'>
          <img className="article_btn_back_img" src={Line} alt="img" />
          Back
        </Link>
      <div className="article-top-image">
        
        <img src={PhotoTop} alt={article.introductionTitle} />
        <time dateTime="2024-04-14" className="article-date">
          {article.date}
        </time>
      </div>
    </>
  );
};

export default TopImage;
