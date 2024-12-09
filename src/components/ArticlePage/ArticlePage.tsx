import "./ArticlePage.scss";

import ArticleContent from "./tsx/ArticleContent";
import SeeMoreSection from "./tsx/SeeMoreSection";
import TopImage from "./tsx/TopImage";

function ArticlePage() {
  return (
    <div className="container">
      <TopImage />
      <ArticleContent />
      <SeeMoreSection />
    </div>
  );
}

export default ArticlePage;
