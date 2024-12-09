import  { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Nav from './components/Layers/Nav/Nav';
import Footer from './components/Layers/Footer/Footer';

const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const TaskPage = lazy(() => import('./components/TaskPage/TaskPage'));
const ProfilePage = lazy(() => import('./components/ProfilePage/ProfilePage'));
const BlogPage = lazy(() => import('./components/BlogPage/BlogPage'));
const ArticlePage = lazy(() => import('./components/ArticlePage/ArticlePage'));
const RefPage = lazy(() => import('./components/RefPage/refPage'));

const basename = process.env.NODE_ENV === 'production' ? '/PixiReact/' : '/';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Этот компонент ничего не рендерит
}

function App() {
  useEffect(() => {
    // Прокрутка вверх при первой загрузке страницы
    window.scrollTo(0, 0);
    
    // Обработчик события для прокрутки вверх при обновлении страницы
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Router basename={basename}>
      <Nav />
      <ScrollToTop /> {/* Добавляем компонент для прокрутки вверх */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/referrals" element={<RefPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
