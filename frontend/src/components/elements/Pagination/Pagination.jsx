import React from 'react'
import styles from './Pagination.module.scss'
import { useSelector,useDispatch } from 'react-redux'

const Pagination = () => {

    const dispatch = useDispatch()
    const  { products } = useSelector( state => state)
    const { currentPage,productsPerPage,allProducts,productsCount } = products
    
    const countOfPages = Math.ceil( productsCount / productsPerPage)
    const pageNumbers = []

    for(let i = 1;i <= countOfPages; i++) {
        pageNumbers.push(i)
    }

    const onPrevPage = (page) => {
            if ( page < pageNumbers[0]) {
                paginate(pageNumbers.length)
            } else {
                paginate(page)
            }
    }
    const onNextPage = (page) => {
            if ( page > pageNumbers.length) {
                paginate(1)
            } else {
                paginate(page)
            }
    }

    const paginate = (pageNumber) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: pageNumber
        })

        dispatch({
            type: 'STOP_SPINNER'
        })
    }

    return (
        <div className={styles.pagination}>
            <button className={styles.pagination__prevButton} onClick={() => onPrevPage(currentPage - 1)}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 1.25L1 4.75L4.5 8.25" stroke="black"/>
                    <path d="M8.5 1.25L5 4.75L8.5 8.25" stroke="black"/>
                </svg>
                Предыдущая
            </button>
            {pageNumbers.map(item => (
                        <span 
                            key={item}
                            className={currentPage === Number(item) ? [styles.pagination__link,styles.activeLink].join(' ') : styles.pagination__link}
                            onClick={() => paginate(Number(item))}>
                                {item}
                        </span>
            ))}
            <button className={styles.pagination__nextButton} onClick={() => onNextPage(currentPage + 1)}>
                Следущая
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1.25L8.5 4.75L5 8.25" stroke="black"/>
                     <path d="M1 1.25L4.5 4.75L1 8.25" stroke="black"/>
                </svg>
            </button>
        </div>
    )
}

export default Pagination
