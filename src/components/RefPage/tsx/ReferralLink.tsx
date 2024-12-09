import { useState } from "react";
import "../scss/ReferralLink.scss";

const ReferralLink = () => {
  const referralLink = "PeexiPunkReferalLin...";
  const tokensFromFriends = 1100;
  const [copied, setCopied] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCopy = (
    
  ) => {
    navigator["clipboard"].writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement | null;
    if (target) {
      const rect = target.getBoundingClientRect();
      const clientX = event.touches[0].clientX;
      const clientY = event.touches[0].clientY;
      setPosition({ x: clientX - rect.left, y: clientY - rect.top });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement | null;
    if (target) {
      const rect = target.getBoundingClientRect();
      const clientX = event.clientX;
      const clientY = event.clientY;
      setPosition({ x: clientX - rect.left, y: clientY - rect.top });
    }
    handleCopy();
  };

  return (
    <div className="referral-container">
      <h2 className="referral-title">Referral link</h2>

      <div className="share-link-section">
        <p className="share-link-title">Share link</p>
        <div
          className="link-box"
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleCopy}
        >
          <span className="referral-link">{referralLink}</span>
          <button className="copy-button" aria-label="Copy link"></button>
          {copied && (
            <span
              className="copied-message"
              style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
              Copied!
            </span>
          )}
        </div>
        <p className="tokens-title">Tokens from friends</p>
        <p className="tokens-amount">
          <span className="amount-highlighted">{tokensFromFriends}</span> Peexi
          Token
        </p>
      </div>
    </div>
  );
};

export default ReferralLink;
