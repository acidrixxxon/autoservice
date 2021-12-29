import React from 'react'
import  './Catalog.scss'
import { Link } from 'react-router-dom'
import Sidefilters from '../../components/elements/Sidefilters/Sidefilters'
import Products from '../../components/elements/Products/Products'
import SearchForm from '../../components/UI/SearchForm/SearchForm'
import { CSSTransition } from 'react-transition-group'

const CatalogPage = () => {
    const [ showSideFilters,setShowFilters ] = React.useState(true)

    const toggleSideFilters = () => setShowFilters(!showSideFilters)
    
    
    return (
        <div className="catalog-page">
            <div className="catalog-page__container">
                 <div className="catalog-page__navigation">
                     <Link to="/" className="catalog-page__navigation-link">Главная</Link>
                     <span className="catalog-page__navigation-divider">/</span>
                     <span className="catalog-page__navigation-unactiveLink">Все автомобили</span>
                 </div>
                 
                 <div className="catalog-page__setts">
                    <SearchForm  />

                     <div className="catalog-page__setts-buttonsGroup">
                        <ul className="catalog-page__setts-buttonsGroup__appearance">
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
                            className="catalog-page__setts-buttonsGroup__showfiltersButton"
                            onClick={() => toggleSideFilters()}>
                                Показать все фильтры
                        </button>
                     </div>
                 </div>

                 <div className="catalog-page__main">
                     <CSSTransition         
                        in={showSideFilters}
                        timeout={300}
                        classNames={{
                            enterActive: "sideEnter",
                            enterDone: "sideEnterActive",
                            exit: "sideExit",
                            exitActive: "sideExitActive",
                            exitDone: "sideExitDone"
                        }}
                    >
                        <Sidefilters/>
                    </CSSTransition>

                     <div className="catalog-page__main-content">
                        <Products />
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default CatalogPage
