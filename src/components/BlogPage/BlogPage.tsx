import NewsList from "./NewsList/NewsList";
import TopNewsBlock from "./TopNewsBlock/TopNewsBlock";
import styles from "./BlogPage.module.scss";

function BlogPage() {
  return (
    <div className={styles.mainContainer}>
      <TopNewsBlock />
      <NewsList />
    </div>
  );
}

export default BlogPage;
