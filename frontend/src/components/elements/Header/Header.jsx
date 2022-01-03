import React from 'react'
import styles from './Header.module.scss'
import Callback from '../../UI/Callback/Callback.jsx'
import { useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation()
    const [showNav,setShowNav ] = React.useState(false)
    
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logoContainer}>
                    <a href="/">Сильвер</a>
                </div>

                <div className={styles.header__rightBlock}>
                    <div className={styles.header__topBar}>
                        
                        <div className={styles.header__searchBlock}>
                            <input type="search" />
                            <button>
                                <svg width="14" height="15" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.5" cy="7.5" r="6.75" stroke="white" stroke-width="1.5"/>
                                    <path d="M12 12.5L16 16.5" stroke="white" stroke-width="1.5"/>
                                </svg>
                            </button>
                        </div>

                        <div className={styles.header__callbackBlock}>
                            <div className={styles.header__callbackBlock__number}>
                                <span className={styles.header__phone}>8-800-123-45-67</span>
                                <span className={styles.header__text}>МНОГОКАНАЛЬНЫЙ</span>
                            </div>
                            <Callback />
                        </div>
                        
                        <div className={styles.header__hamburger} onClick={() => setShowNav(!showNav)}>
                            <div className={[styles.line,showNav ? styles.line1 : ''].join(' ')}></div>
                            <div className={[styles.line,showNav ? styles.line2 : ''].join(' ')}></div>
                            <div className={[styles.line,showNav ? styles.line3 : ''].join(' ')}></div>
                        </div>
                    </div>

                    <div className={styles.header__nav}>    
                        <ul className={showNav ? [styles.header__navList,styles.active].join(' ') : styles.header__navList} >
                            <li><a href="/catalog" className={location.pathname === '/catalog' ? styles.active : ''}>Каталог</a></li>
                            <li><a href="/">Спецпредложения</a></li>
                            <li><a href="/">Услуги</a></li>
                            <li><a href="/">О нас</a></li>
                            <li><a href="/">Карьера</a></li>
                            <li><a href="/">Отзывы</a></li>
                            <li><a href="/">Контакты</a></li>

                            <input type="search" className={styles.header__navList_searchInput} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
