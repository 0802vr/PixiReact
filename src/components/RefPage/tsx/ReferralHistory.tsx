import "../scss/ReferralHistory.scss";
import { useState } from "react";

const referrals = [
  {
    id: 1,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "received",
  },
  {
    id: 2,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 3,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 4,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 5,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 6,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 7,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 8,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 9,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 10,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 11,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
  {
    id: 12,
    avatar: "./assets/refPage/avatar.png",
    address: "0xe32b....542d",
    reward: "20 000 PC",
    status: "get",
  },
];

const ReferralHistory = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSeeAll = () => {
    setVisibleCount(referrals.length);
  };

  const handleHide = () => {
    setVisibleCount(5);
  };

  const allVisible = visibleCount >= referrals.length;

  return (
    <>
      <div className="referral-history">
        <div className="title-container">
          <h2 className="title">Referral history</h2>
        </div>
        <div className="table-header">
          <span className="column-header-name">Name</span>
          <span className="column-header-reward">Reward</span>
        </div>

        {referrals.slice(0, visibleCount).map((referral) => (
          <div className="referral-item" key={referral.id}>
            {/* <div className="referral-info"> */}
            <div className="user-name-info">
              <div className="avatar-container">
                {" "}
                <img
                  src={referral.avatar}
                  alt="User avatar"
                  className="avatar"
                />
              </div>
              <span className="address">{referral.address}</span>
            </div>
            <div className="reward-info">
              <span className="reward">{referral.reward}</span>
            </div>
            {/* </div> */}
          </div>
        ))}
        {!allVisible && (
          <section className="see-all-container">
            <button className="see-all" onClick={handleSeeAll}>
              See all referrals
            </button>
            <div className="see-all-shadow"></div>
          </section>
        )}

        {allVisible && (
          <section className="hide-container">
            <button className="hide" onClick={handleHide}>
              Hide
            </button>
            <div className="hide-shadow"></div>
          </section>
        )}
      </div>
    </>
  );
};

export default ReferralHistory;
