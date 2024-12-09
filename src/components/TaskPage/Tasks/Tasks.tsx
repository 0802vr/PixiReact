import { useEffect, useState } from "react";
import styles from './Tasks.module.scss';

import SocialQuests from "../SocialQuests/SocialQuests";
import BlockchainQuests from "../BlockchainQuests/BlockchainQuests";
import Balance from "../Balance/Balance";
import Rewards from "../Rewards/Rewards";
import AccessBetaTest from "../AccessBetaTest/AccessBetaTest";
import UserQuests from "../UserQuests/UserQuests";

const Tasks: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 960) return;

      const balanceElement = document.querySelector('.tasksBalance');
      const blockchainElement = document.querySelector('.tasksBlockchainQuests');
      const boxReward = document.querySelector(`.${styles.tasksRigthElsFixed}`)

      if (balanceElement && blockchainElement && boxReward) {
        const balanceRect = balanceElement.getBoundingClientRect();
        const blockchainRect = blockchainElement.getBoundingClientRect();
        const boxRewardRect = boxReward.getBoundingClientRect();

        // Проверяем, достиг ли верх экрана низа Balance
        if (balanceRect.bottom <= 0 && !isAbsolute) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }

        
        if (blockchainRect.bottom <= boxRewardRect.bottom) {
          console.log(blockchainRect.bottom, boxRewardRect.bottom)
          setIsAbsolute(true);
           
            
          
        } 
        if(balanceRect.bottom <= 0 &&  window.scrollY < boxRewardRect.top + window.scrollY) {
          setIsAbsolute(false);
          setIsFixed(true);
        }

       
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.sectionMainMargin}>
      <h1 className={`${styles.tasksContainerTitle} ${styles.tasksContainerTitleMob}`}>Tasks</h1>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksLeftEls}>
          <h1 className={styles.tasksContainerTitle}>Tasks</h1>
          <UserQuests />
          <SocialQuests />
          <div className="tasksBlockchainQuests">
            <BlockchainQuests />
          </div>
        </div>
        <div className={styles.tasksRigthEls}>
          <div className="tasksBalance">
            <Balance />
          </div>
          <div className={styles.tasksRigthElsFixedBox}>
            <div className={`${styles.tasksRigthElsFixed} ${isFixed && !isAbsolute ? styles.Fixed : styles.notFixed} ${isAbsolute ? styles.Absolute : ''}`}>
              <Rewards />
              <AccessBetaTest />
            </div>
          </div>
        </div>
      </div>
        
       
    </div>
  );
}

export default Tasks;