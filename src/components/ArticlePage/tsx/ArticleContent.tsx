import "../scss/ArticleContent.scss";
import RightBracket from "@/uiKit/RightBracket";
import LeftBracket from "@/uiKit/LeftBracket";
import SocialIcons from "@/uiKit/SocialIcons";
import ArticleSlider from "./ArticleSlider";
import { articleData } from "./ArticleDate";



const ArticleContent: React.FC = () => {
  const article = articleData[0];

  return (
    <main className="article-content-container">
      <article className="article-content">
        <header className="article-header">
          <div className="article-category-container">
            <LeftBracket />
            <span className="article-category">{article.category}</span>
            <RightBracket />
          </div>
          <h1 className="article-main-title">{article.mainTitle}</h1>
          <p className="article-main-description">{article.mainDescription}</p>
        </header>
        <section className="article-introduction-content">
          <h2 className="introduction-title">{article.introductionTitle}</h2>
          <p className="introduction-description">
            {article.introductionDescription}
          </p>
        </section>

        <ArticleSlider />

        <section className="article-paragraph-content">
          <h3 className="paragraph-title">{article.paragraphTitle1}</h3>
          <p className="paragraph-description">
            {article.paragraphDescription1}
          </p>

          <h3 className="paragraph-title">{article.paragraphTitle2}</h3>
          <p className="paragraph-description">
            {article.paragraphDescription2}
          </p>

          <h2 className="closing-title">{article.closingTitle1}</h2>
          <p className="paragraph-description">
            {article.paragraphDescription3}
          </p>

          <h2 className="closing-title">{article.closingTitle2}</h2>
          <p className="paragraph-description">
            {article.paragraphDescription4}
          </p>
        </section>
      </article>
      <SocialIcons />
    </main>
  );
};

export default ArticleContent;
