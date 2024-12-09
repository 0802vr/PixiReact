import "./refPage.scss";
import Awards from "./tsx/Awards";
import Balance from "./tsx/Balance";
import Information from "./tsx/Information";
import ReferralLink from "./tsx/ReferralLink";
import ReferralHistory from "./tsx/ReferralHistory";
import ProfileNav from "../Layers/ProfileNav/ProfileNav";

  
function RefPage() {

   

  return (
    <>
      <div className="ProfileNav_padding">
        <ProfileNav />
      </div>
      
      <main className="main-container">
        
        <div className="left_cont">
          <div className="left_cont_info">
            <Information/>    
          </div>        
          <ReferralLink />
          <ReferralHistory />
        </div>
        <div className="right_cont">
          <div className="right_cont_info">
          <Information />    
          </div>
          <Balance />
          <Awards />
        </div>
      
    </main>
  </>
  );
}

export default RefPage;
