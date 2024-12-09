import { useEffect, useState } from "react";
import "../scss/Awards.scss";

const Awards = () => {
  const rewardsData = [
    { inviteText: "Invite 5 friends", points: "100", completed: true },
    { inviteText: "Invite 15 friends", points: "1000", completed: true },
    { inviteText: "Invite 50 friends", points: "3000", completed: false },
    { inviteText: "Invite 100 friends", points: "7000", completed: false },
    { inviteText: "Invite 500 friends", points: "20000", completed: false },
  ];

  const [isFixed, setIsFixed] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1000) return;

      const awardsCont = document.querySelector('.awards-container');
      const historyCont = document.querySelector('.referral-history');
      const balanceElement = document.querySelector('.balance-container');

      if (awardsCont && historyCont && balanceElement) {
        const historyContRect = historyCont.getBoundingClientRect();
        const awardsContRect = awardsCont.getBoundingClientRect();
        const balanceRect = balanceElement.getBoundingClientRect();

        // Check if balance is out of view
        if (balanceRect.bottom <= 0 && !isAbsolute) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }

        // Check if awards container is below the history container
        if (historyContRect.bottom <= awardsContRect.bottom) {
          setIsAbsolute(true);
        }  

        // When scrolling up above the history container
        if (window.scrollY < historyContRect.top + window.scrollY) {
          setIsAbsolute(false);
          setIsFixed(true);
        }

        // When scrolling back up above the balance container
        if (window.scrollY < balanceRect.top + 50 + window.scrollY) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="awards-container-main">
      <div className={`awards-container ${isFixed && !isAbsolute ? 'awardsFixed' : 'awardsNotFixed'} ${isAbsolute ? 'awardsAbsolute' : ''}`}>
        <h2 className="awards-title">Awards</h2>
        <p className="awards-description">
          You receive tokens in the amount of 5% of the tokens received for
          completing friends' quests. In the future, when your friends buy game
          items on the site and top up your wallet, you will receive 0.5% for your
          friends' transactions.
        </p>
        <div className="rewards-table">
          <ul className="rewards-list">
            {rewardsData.map((item, index) => (
              <li
                key={index}
                className={`reward-item ${item.completed ? "completed" : "not-completed"}`}
              >
                <span className="invite-text">{item.inviteText}</span>
                <span className="points">{item.points} PT</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awards;
