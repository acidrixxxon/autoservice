import React from 'react'
import styles from './Catalog.module.scss'
import { Link } from 'react-router-dom'
import Sidefilters from '../../components/elements/Sidefilters/Sidefilters'
import Products from '../../components/elements/Products/Products'
import SearchForm from '../../components/UI/SearchForm/SearchForm'
import { CSSTransition } from 'react-transition-group'

const CatalogPage = () => {
    const [ showSideFilters,setShowFilters ] = React.useState(true)
    const [ searchQuery ,setSearchQuery ] = React.useState('')

    const toggleSideFilters = () => {
        setShowFilters(!showSideFilters)
    }

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                 <div className={styles.nav}>
                     <Link to="/" className={styles.nav__link}>Главная</Link>
                     <span className={styles.nav__divider}>/</span>
                     <span className={styles.nav__unactiveLink}>Все автомобили</span>
                 </div>
                 <div className={styles.after__sliderBlock}>
                     <SearchForm 
                        searchQuery={searchQuery} 
                        setSearchQuery={setSearchQuery} />

                     <div className={styles.buttonsBlock}>
                        <ul className={styles.appearance}>
                            <li>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="5" height="5" rx="0.5" stroke="#878787"/>
                                    <rect x="8.5" y="0.5" width="5" height="5" rx="0.5" stroke="#878787"/>
                                    <rect x="8.5" y="8.5" width="5" height="5" rx="0.5" stroke="#878787"/>
                                    <rect x="0.5" y="8.5" width="5" height="5" rx="0.5" stroke="#878787"/>
                                </svg>
                                <span>Плитка</span>
                            </li>
                            <li>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="13" height="3" rx="0.5" stroke="#878787"/>
                                    <rect x="0.5" y="5.5" width="13" height="3" rx="0.5" stroke="#878787"/>
                                    <rect x="0.5" y="10.5" width="13" height="3" rx="0.5" stroke="#878787"/>
                                </svg>
                                <span>Список</span>
                            </li>
                        </ul>
                        <button
                            style={showSideFilters ? {} : {backgroundColor: "white",color: "#333",border: "1px solid #c2c4c8"}}
                            className={styles.showfiltersBtn}
                            onClick={() => toggleSideFilters()}>
                                Показать все фильтры
                        </button>
                     </div>
                 </div>

                 <div className={styles.main__block}>
                     <CSSTransition         
                        in={showSideFilters}
                        timeout={300}
                        classNames={{
                            enterActive: styles.sideEnter,
                            enterDone: styles.sideEnterActive,
                            exit: styles.sideExit,
                            exitActive: styles.sideExitActive,
                            exitDone: styles.sideExitDone
                        }}
                    >
                        <Sidefilters/>
                    </CSSTransition>

                     <div className={styles.main__content}>
                        <Products />
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default CatalogPage
