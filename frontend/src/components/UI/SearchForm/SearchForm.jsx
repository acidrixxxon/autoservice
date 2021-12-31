import React from 'react'
import styles from './SearchForm.module.scss'
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../../redux/actions/productActions'
import { Link } from 'react-router-dom'
import { CLEAR__ERROR } from '../../../redux/constants/ProductConstans'

const SearchForm = () => {
    const [ searchQuery ,setSearchQuery ] = React.useState('')



    const dispatch = useDispatch()

    return (
        <div className={styles.searchForm}>

            <input 
                type="text" 
                placeholder="Поиск по каталогу" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} />

            <Link to={`/search/mark=${searchQuery}`}  onClick={() => dispatch({type: CLEAR__ERROR})} >
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.33239" cy="6.36364" r="5.61364" stroke="white" stroke-width="1.5"/>
                    <path d="M11.1523 10.6061L14.5463 14" stroke="white" stroke-width="1.5"/>
                </svg>
                
                <span>Поиск</span>
            </Link>

        </div>
    )
}

export default SearchForm
