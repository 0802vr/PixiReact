import React, { useState } from "react";
import styles from './BlockchainQuests.module.scss';
import LineTaskIcon from '@/images/Task/lineTask.svg?react'; 

const BlockchainList = [
  { id: 1, title: "Top up your balance by 5 usdt", actionText: "Share a post on your profile", buttonText: "Share", coin: 4000 },
  { id: 2, title: "Stake for 1 month / 5 usd", actionText: "Follow a new user", buttonText: "Follow", coin: 2000 },
  { id: 3, title: "Make a purchase of a token in the amount of $3", actionText: "Join a group that interests you", buttonText: "Join", coin: 1000 },
  { id: 4, title: "Make 3 transactions online", actionText: "Like a post from your feed", buttonText: "Like", coin: 5000 },
  
];

const BlockchainQuests: React.FC = () => {
  const [visibleModals, setVisibleModals] = useState<boolean[]>(new Array(BlockchainQuests.length).fill(false));

  const toggleModal = (index: number) => {
    setVisibleModals(prev => {
      const newVisibleModals = [...prev];
      newVisibleModals[index] = !newVisibleModals[index];
      return newVisibleModals;
    });
  };

  return (
    <div className={styles.BlockchainQuests}>
      <div className={styles.questBox}>
        <h3 className={styles.questTitle}>Blockchain quests</h3>
        <div className={styles.questCount}>
          <p className={styles.questCountDo}>0</p>
          <p className={styles.questCountAll}>/{BlockchainList.length}</p>
        </div>
      </div>
      <div className={styles.questList}>
        {BlockchainList.map((quest, index) => (
          <div className={`${styles.questListItem} ${visibleModals[index] ? styles.questListItemActive : ''}`} key={quest.id}>
            <div className={styles.questListItemMain} onClick={() => toggleModal(index)}>
              <div className={styles.questListBox}>
                <div className={styles.questListImg}></div>
                <h3 className={`${styles.questListTitle} ${visibleModals[index]? styles.questListTitleVis : ''}`}>{quest.title}</h3>
              </div>              
              <LineTaskIcon 
                className={`${styles.questListLine} ${ visibleModals[index] ? styles.questListLineActive : ''}`}
                style={{ transform: visibleModals[index] ? "rotate(180deg)" : "rotate(0deg)" }} 
              />
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
              <div className={styles.questListBtnBox}>
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

export default BlockchainQuests;
