import MainBanner from './MainBanner/MainBanner';
import Planet from './Planet/Planet'; 
import Classes from './Classes/Classes';
import SkillTree from './SkillTree/SkillTree';
import Items from './Items/Items';
import Auction from './Auction/Auction';
import ArcadeBanner from './ArcadeBanner/ArcadeBanner';
import Blog from './Blog/Blog';
import EcoSys from './EcoSys/EcoSys';
 
import styles from './MainPage.module.scss';
 
 

function MainPage() {

  
  return (
    <main className={styles.main}>
     
             
          <MainBanner />
          <Planet /> 
          <Classes /> 
          <SkillTree />
          <Items />      
          <Auction />
          <ArcadeBanner />
          <EcoSys />
          <Blog />          
      
     
    </main>
  );
}

export default MainPage;