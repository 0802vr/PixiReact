import { useEffect, useState } from "react";
import styles from './ProfileNav.module.scss';
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/profile", label: "Profile" },
  { path: "/tasks", label: "Tasks" },
  { path: "/referrals", label: "Referrals" },
  { path: "/arcade", label: "Arcade season", soon: true },
  { path: "/staking", label: "Staking", soon: true },
  { path: "/auction", label: "Auction", soon: true },
  { path: "/leader-board", label: "Leader board", soon: true },
];

const ProfileNav: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/tasks");
  const location = useLocation(); // Get the current location

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link when the location changes
  }, [location]);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };
  return (
    <div className={styles.sectionMainMargin}>
      <div className={`${styles.ProfileNav}`}>
        
        {navItems.map(item => (
          <Link
            to={item.path}
            key={item.path}
            onClick={() => handleLinkClick(item.path)}
            className={`${styles.ProfileNavTitle} ${activeLink === item.path ? styles.ProfileNavTitleActive : ""}`}
            style={item.soon ? { pointerEvents: 'none', opacity: 0.5 } : {}}
          >
            {item.soon ? <div className={styles.soonLabel}>Soon</div> : ''}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProfileNav;