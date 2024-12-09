import { useEffect } from "react";
import styles from './Balance.module.scss';
 


 
const Balance:React.FC = () => {
  useEffect(()=> {
     
  
  }, [])
  
  return (
    
    <div className={styles.BalanceItems}>
      <h3 className={styles.BalanceTitle}>Balance</h3>
      <div className={styles.BalanceCoinBox}>
        <p className={styles.BalanceCoinNum}>100,000</p>
        <p className={styles.BalanceCoinText}>Peexi Coin</p>
      </div>
     {/*  <div className={styles.BalanceTokenBox}>
        <p className={styles.BalanceTokenNum}>1000</p>
        <p className={styles.BalanceTokenText}>Peexi Token</p>
      </div> */}
    </div>
    
    
  );
}

export default Balance;
