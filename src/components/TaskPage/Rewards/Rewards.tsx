import React, { useState } from 'react';
import styles from './Rewards.module.scss';
import LineTaskIcon from '@/images/Task/lineTask.svg?react'; 
const Rewards: React.FC = () => {
  const [visibleModals, setVisibleModals] = useState(false);
  const rewardsData = [
    { title: "User account quests", current: 4, total: 4 },
    { title: "Social quests", current: 3, total: 8 },
    { title: "Blockchain quests", current: 1, total: 4 },
  ];
  const toggleModal = () => {
    if(window.innerWidth < 960){
      setVisibleModals(prev => !prev);
    }
    
  };
  return (
    <div className={`${styles.rewardsBox} ${ visibleModals ? styles.rewardsBoxActive : ''}`}>
      <div className={styles.rewardsTitleBox} onClick={() => toggleModal()}>
          <h3 className={styles.rewardsTitle}>Rewards</h3>
          <LineTaskIcon 
                className={`${styles.rewardsTitleLine} ${ visibleModals ? styles.rewardsTitleLineActive : ''}`}
                style={{ transform: visibleModals ? "rotate(180deg)" : "rotate(0deg)" }} 
          />
      </div>
      
      <div className={`${styles.rewardsContainer} ${visibleModals ? styles.rewardsContainerShow : ''}`}>
      {rewardsData.map((reward, index) => {
        // Вычисляем процент заполнения
        const progressPercentage = (reward.current / reward.total) * 100;
        
        return (
          <div key={index} className={ index === 0 ? styles.rewardsUserQuest : index === 1 ? styles.rewardsSocialQuest : styles.rewardsBlockChainQuest }>
            <div className={styles.rewardsItems}>
              <h6 className={styles.rewardsSubTitle}>{reward.title}</h6>
              <div className={styles.rewardsNum}>
                <p className={styles.rewardsNumDo}>{reward.current}</p>
                <p className={styles.rewardsNumAll}>/{reward.total}</p>
              </div>
            </div>
            <div className={styles.rewardsProgress}>
              <div 
                className={styles.progressComplete} 
                style={{ width: `${progressPercentage}%` }} 
              ></div>
            </div>
            {reward.current === reward.total && (
               
              <div className={styles.rewardsBtnBox}>
                <div className={styles.rewardsBtn}>Get an award “30 000 PC”</div>
                <div className={styles.rewardsBtnBack}>fff</div>
              </div>
              
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Rewards;