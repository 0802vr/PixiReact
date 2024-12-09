import React, { useState } from 'react';
import styles from './AccessBetaTest.module.scss';
import LineTaskIcon from '@/images/Task/lineTask.svg?react'; 

const AccessBetaTest:React.FC = () => {
  const [visibleModals, setVisibleModals] = useState(false);
   const BetaTest = [
      { title: "Tasks", current: 1, total: 3 },
       
    ];
    const toggleModal = () => {
      
      if(window.innerWidth < 960){
        setVisibleModals(prev => !prev);
      }
      
    };
    return (
      <div className={`${styles.betaTestBox} ${  visibleModals ? styles.betaTestBoxActive : ''}`} >
        <div className={styles.betaTestTitleBox} onClick={toggleModal}>
          <h3 className={styles.betaTestTitle}>Access to closed beta test</h3>
          <LineTaskIcon 
                className={`${styles.betaTestTitleLine} ${ visibleModals ? styles.betaTestTitleLineActive : ''}`}
                style={{ transform: visibleModals ? "rotate(180deg)" : "rotate(0deg)" }} 
          />
        </div>
        <div className={`${styles.betaTestContainer} ${visibleModals ? styles.betaTestContainerShow : ''}`}>
            <p className={styles.betaTestText}>To participate in the closed beta testing of the game, you must complete all the proposed tasks. This will allow you to access the test and evaluate the game before its official release.</p>
            {BetaTest.map((test, index) => {
            
              const progressPercentage = (test.current / test.total) * 100;
              
              return (
                <div key={index} className={styles.betaTestUserQuest}>
                  <div className={styles.betaTestItems}>
                    <h6 className={styles.betaTestSubTitle}>{test.title}</h6>
                    <div className={styles.betaTestNum}>
                      <p className={styles.betaTestNumDo}>{test.current}</p>
                      <p className={styles.betaTestNumAll}>/{test.total}</p>
                    </div>
                  </div>
                  <div className={styles.betaTestProgress}>
                    <div 
                      className={styles.progressComplete} 
                      style={{ width: `${progressPercentage}%` }} 
                    ></div>
                  </div>
                  {test.current === test.total ? (
                    
                    <div className={styles.betaTestBtnBox}>
                      <div className={styles.betaTestBtn}>Play closed beta test</div>
                      <div className={styles.betaTestBtnBack}>fff</div>
                  </div>
                  ) :  (                    
                    <div className={`${styles.betaTestBtnBox} ${styles.betaTestBtnBoxOpacity}`}>
                      <div className={styles.betaTestBtn}>Play closed beta test</div>
                      <div className={styles.betaTestBtnBack}>fff</div>
                  </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    )
}

export default AccessBetaTest;
