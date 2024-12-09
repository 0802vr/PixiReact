import styles from './Nav.module.scss';
import '../Burger/forBurger.scss';
import MyIcon from '@/images/logout.svg?react';
import Burger from '../Burger/Burger';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        /* const collectionsButton = document.querySelector(`.${styles.collectionsButton}`) as HTMLElement;
        const additionalBlock = document.querySelector(`.${styles.additionalBlock}`) as HTMLElement;
        const collectionsImage = document.querySelector(`.${styles.collectionsImage}`) as HTMLImageElement; */
       
        const playerButton = document.querySelector(`.${styles.playerInfoSection}`) as HTMLElement;
        const playerBox = document.querySelector(`.${styles.additionalBlockPlayer}`) as HTMLElement;

       /*  const handleCollectionsMouseEnter = () => {
            additionalBlock.classList.add(styles.visible); // Показываем блок при наведении
            collectionsImage.style.transform = 'rotate(60deg)'; // Поворачиваем изображение
        }; */

        /* const handleCollectionsClick = () => {
            // Переключаем видимость блока при клике
            additionalBlock.classList.toggle(styles.visible);
            collectionsImage.style.transform = additionalBlock.classList.contains(styles.visible) ? 'rotate(60deg)' : 'rotate(0deg)';
        }; */

        const handlePlayerMouseEnter = () => {
            playerBox.classList.add(styles.visiblePlayer); // Показываем блок при наведении
        };

        const handlePlayerMouseLeave = () => {
            playerBox.classList.remove(styles.visiblePlayer); // Скрываем блок при выводе курсора
        };

        const checkMouseDistance = (e: MouseEvent) => {
            const rect = playerBox.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Проверяем, находится ли мышь более чем в 100 пикселях от playerBox
            const isFarFromBox = (
                mouseX < rect.left - 50 ||
                mouseX > rect.right + 50 ||
                mouseY < rect.top - 50 ||
                mouseY > rect.bottom + 50
            );

            // Если мышь далеко от playerBox, убираем класс видимости
            if (isFarFromBox) {
                playerBox.classList.remove(styles.visiblePlayer);
            }
            /* const rectCollections = additionalBlock.getBoundingClientRect();   */          

            // Проверяем, находится ли мышь более чем в 100 пикселях от playerBox
            /* const isFarCollections = (
                mouseX < rectCollections.left - 50 ||
                mouseX > rectCollections.right + 50 ||
                mouseY < rectCollections.top - 50 ||
                mouseY > rectCollections.bottom + 50
            ); */

            // Если мышь далеко от playerBox, убираем класс видимости
            /* if (isFarCollections) {
                additionalBlock.classList.remove(styles.visible);
                collectionsImage.style.transform = additionalBlock.classList.contains(styles.visible) ? 'rotate(60deg)' : 'rotate(0deg)';
            } */
        };
        
        function handlePlayerBoxClick(){            
            playerBox.classList.toggle(styles.visiblePlayer);
        }
        /* collectionsButton.addEventListener('mouseenter', handleCollectionsMouseEnter);
        collectionsButton.addEventListener('click', handleCollectionsClick); */
        playerButton.addEventListener('mouseenter', handlePlayerMouseEnter);
        playerBox.addEventListener('mouseleave', handlePlayerMouseLeave);
        document.addEventListener('mousemove', checkMouseDistance);
        playerButton.addEventListener('click', handlePlayerBoxClick);           

        return () => {
            /* collectionsButton.removeEventListener('mouseenter', handleCollectionsMouseEnter);
            collectionsButton.removeEventListener('click', handleCollectionsClick); */
            playerButton.removeEventListener('mouseenter', handlePlayerMouseEnter);
            playerBox.removeEventListener('mouseleave', handlePlayerMouseLeave);
            document.removeEventListener('mousemove', checkMouseDistance);
            playerButton.removeEventListener('click', handlePlayerBoxClick)
        };
    }, []);


    useEffect(() => {
        const nav = document.querySelector(`.${styles.section01Nav}`) as HTMLElement;      
        nav.style.opacity = '0';
        const animHead = (heading: HTMLElement, delay: number) => {
            gsap.to(heading, {
                opacity: 1,
                duration: 0.4,
                delay: delay,
                ease: "power1.out"
            });
        };
        animHead(nav, 0.3);
        
    }, [location]);

    return (
        <nav className={styles.section01Nav}>
            <Link to='/' className={styles.section01NavLogo}>PEEXI PUNK</Link>
            <div className={styles.section01NavBox}>
                <div className={styles.section01NavBoxLeft}>
                    <div className={styles.collectionsBox}>
                        <Link to='/shop' className={styles.collectionsButton}>
                            Shop
                        </Link>
                        {/* <img className={styles.collectionsImage} src="./assets/mainPage/header/trial.svg" alt="Collections" />
                        <div className={`${styles.additionalBlock} `}>
                            <a href="#" className={styles.additionalBlockLink}><img className={styles.additionalBlockIcon} src="./assets/mainPage/footer/icon.png" alt="icon" />Skins</a>
                            <a href="#" className={styles.additionalBlockLink}><img className={styles.additionalBlockIcon} src="./assets/mainPage/footer/icon.png" alt="icon" />Weapons</a>
                            <a href="#" className={styles.additionalBlockLink}><img className={styles.additionalBlockIcon} src="./assets/mainPage/footer/icon.png" alt="icon" />Lands</a>
                            
                        </div> */}
                    </div>
                    <p className={styles.whitePaperButton}>
                        White paper
                    </p>
                    <Link to='/blog' className={styles.blogButton}>
                        Blog
                    </Link>
                </div>
                <div className={styles.section01NavBoxRight}>
                    <img className={styles.playerImage} src="./assets/mainPage/header/profile.png" alt="Player" />
                    <div className={styles.playerInfoSection}>
                        <p className={styles.playerName}>
                            Harry Brasko
                        </p>
                        <div className={styles.playerIdSection}>
                            <img className={styles.playerIdImage} src="./assets/mainPage/header/wallet.svg" alt="Wallet" />
                            <p className={styles.playerIdText}>
                                0xe32b....542d
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.additionalBlockPlayer} `}>
                        <img className={styles.additionalBlockPlayerGif} src="./assets/mainPage/header/profile.gif" alt="Profile" />
                        <div className={styles.additionalBlockPlayerBox2}>
                            <h3 className={styles.additionalBlockPlayerBox2Title}>Game</h3>
                            <a href="#" className={styles.additionalBlockPlayerLink}>
                                <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/bP.svg" alt="icon" />
                                Arcade season</a>
                            
                            <a href="#" className={`${styles.additionalBlockPlayerLink} ${styles.additionalBlockPlayerLinkDisable}`}>
                                <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/3.svg" alt="icon" />
                                Leader board</a>
                            <a href="#" className={`${styles.additionalBlockPlayerLink} ${styles.additionalBlockPlayerLinkDisable}`}>
                            <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/2.svg" alt="icon" />
                            Auction</a>
                            
                        </div>
                        <div className={styles.additionalBlockPlayerBorderLine}></div>
                        <div className={styles.additionalBlockPlayerBox3}>
                            <h3 className={styles.additionalBlockPlayerBox2Title}>Account</h3>
                            <div className={styles.additionalBlockPlayerBox3Items}>
                                <Link to="/profile" className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/4.svg" alt="icon" />
                                    Profile</Link>
                                <Link to='/tasks' className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/4.svg" alt="icon" />
                                    Tasks</Link>
                                <Link to='/referrals' className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/4.svg" alt="icon" />
                                    Referrals</Link>
                                
                                <a href="#" className={`${styles.additionalBlockPlayerLink} ${styles.additionalBlockPlayerLinkDisable}`}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/5.svg" alt="icon" />
                                    Auction</a>
                                <a href="#" className={`${styles.additionalBlockPlayerLink} ${styles.additionalBlockPlayerLinkDisable}`}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/6.svg" alt="icon" />
                                    Staking</a>
                                {/* <a href="#" className={styles.additionalBlockPlayerLink}>
                                    <img className={styles.additionalBlockPlayerIcon} src="./assets/mainPage/header/7.svg" alt="icon" />
                                    Support</a> */}
                            </div>
                            <a href="#" className={`${styles.additionalBlockPlayerLink} ${styles.additionalBlockPlayerLinkLast}`}>
                                <MyIcon className={styles.additionalBlockPlayerIcon} />
                                <span>Log out</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section01NavBtn}>
                <div className={styles.section01NavBtnBox}>
                    <button className={styles.playPeexiButton}>Connect wallet 
                        <img className={styles.playPeexiButtonImage} src="./assets/mainPage/header/walletBlack.svg" alt="Wallet" /></button>
                    <svg className={styles.section01BtnSvg} viewBox="0 0 236 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9996 1.13155C25.5876 0.720466 26.2877 0.5 27.0051 0.5H232C233.933 0.5 235.5 2.067 235.5 4L235.5 15.9159C235.5 17.0587 234.942 18.1296 234.005 18.7844L211 34.8685C210.412 35.2795 209.712 35.5 208.995 35.5H4C2.067 35.5 0.5 33.933 0.5 32V20.0841C0.5 18.9413 1.05792 17.8704 1.99451 17.2156L24.9996 1.13155Z" stroke="#FEFEFE" />
                    </svg>
                </div>
            </div>
            <Burger />
        </nav>
    );
}

export default Nav;
