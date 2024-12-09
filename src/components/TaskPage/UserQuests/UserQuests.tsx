import React, { useState } from "react";
import styles from './UserQuests.module.scss';
import LineTaskIcon from '@/images/Task/lineTask.svg?react'; 
import DoneImg from '@/images/Task/done.svg?react'; 

const quests = [
  { id: 1, title: "Add a photo to your profile", actionText: "Follow the link and complete the required action 1", buttonText: "Add 1", activeQuests: false, coin: 2000 },
  { id: 2, title: "Add a nickname", actionText: "Follow the link and complete the required action 2", buttonText: "Add 2", activeQuests: true, coin: 4000 },
  { id: 3, title: "Add mail", actionText: "Follow the link and complete the required action 3", buttonText: "Add 3", activeQuests: true, coin: 3000 },
  { id: 4, title: "Connect wallet", actionText: "Follow the link and complete the required action 4", buttonText: "Add 4", activeQuests: true, coin: 1000 },
];

const UserQuests: React.FC = () => {
  const [visibleModals, setVisibleModals] = useState<boolean[]>(new Array(quests.length).fill(false));

  const toggleModal = (index: number) => {
    setVisibleModals(prev => {
      const newVisibleModals = [...prev];
      newVisibleModals[index] = !newVisibleModals[index];
      return newVisibleModals;
    });
  };

  return (
    <div>

      <div className={styles.questBox}>
        <h3 className={styles.questTitle}>User account quests</h3>
        <div className={styles.questCount}>
          <p className={styles.questCountDo}>1</p>
          <p className={styles.questCountAll}>/4</p>
        </div>
      </div>
      <div className={styles.questList}>
        {quests.map((quest, index) => (
          <div className={`${styles.questListItem} ${visibleModals[index] ? styles.questListItemActive : ''}`} key={quest.id}>
            
            <div className={styles.questListItemMain} onClick={() => toggleModal(index)}>
              <div className={styles.questListBox}>
                <div className={`${styles.questListImg} ${quest.activeQuests ? '' : styles.questListImgActive}`}>
                  {quest.activeQuests ? '' : <DoneImg/>}
                </div>
                <h3 className={`${styles.questListTitle} ${visibleModals[index]? styles.questListTitleVis : ''}`}>{quest.title}</h3>
              </div>
              <LineTaskIcon
                className={`${styles.questListLine} ${visibleModals[index] ? styles.questListLineActive : ''}`}
                style={{ transform: visibleModals[index] ? "rotate(180deg)" : "rotate(0deg)" }} />

            </div>
            <div className={`${styles.questListModal} ${visibleModals[index] ? styles.show : ''}`}>
              <p className={styles.questListText}>{quest.actionText}</p>
              <div className={styles.questListBoxPrice}>
                <p className={styles.questListBoxPriceTitle}>Reward</p>
                <div className={styles.questListBoxPriceElms}>
                  <p className={styles.questListBoxPriceCoin}>{quest.coin}</p>
                  <p className={styles.questListBoxPriceText}>Peexi Coin</p>
                </div>
              </div>
              <div className={`${styles.questListBtnBox} ${quest.activeQuests ? "" : styles.questListBtnDone}`} >
                <div className={styles.questListBtn}>{quest.buttonText}</div>
                <div className={styles.questListBtnBack}>fff</div>
              </div>
               
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuests;
