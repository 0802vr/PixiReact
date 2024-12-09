 
import styles from './TaskPage.module.scss';
import { useEffect } from 'react';
import ProfileNav from '../Layers/ProfileNav/ProfileNav';
import Tasks from './Tasks/Tasks';

function TaskPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <main className={styles.main}>
        <>
          <ProfileNav />
          <Tasks />           
        </>       
    </main>
  );
}

export default TaskPage;