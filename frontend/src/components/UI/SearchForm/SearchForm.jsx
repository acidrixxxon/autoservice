import React from 'react'
import styles from './SearchForm.module.scss'

const SearchForm = ({searchQuery,setSearchQuery}) => {
    return (
        <div className={styles.searchForm}>
            <input 
                type="text" 
                placeholder="Поиск по каталогу" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.33239" cy="6.36364" r="5.61364" stroke="white" stroke-width="1.5"/>
                    <path d="M11.1523 10.6061L14.5463 14" stroke="white" stroke-width="1.5"/>
                </svg>
                <span>Поиск</span>
            </button>
        </div>
    )
}

export default SearchForm
