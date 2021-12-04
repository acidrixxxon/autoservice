import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './Products.module.scss'

const Products = ({ products,productsPerPage,currentPage,paginate,productsCount }) => {
    const pageNumbers = []
    const lastPage = Math.ceil(productsCount/productsPerPage)

    for(let i=1; i<= lastPage; i++) {
        pageNumbers.push(i)
    }
    const onNextPage = (pageNumber) => {
        if( pageNumber > lastPage ) {
            paginate(1)
        } else {
            paginate(pageNumber)
        }
    }

    const onPrevPage = (pageNumber) => {
        console.log(currentPage)
        if (pageNumber <= 0 ) {
            paginate(lastPage)
        } else {
            paginate(pageNumber)
        }
    }

    return (
        <div className={styles.products__container}>
            <div className={styles.products__topBlock}>
                <div className={styles.products__pagination}>
                    <button className={styles.products__pagBtnPrev} onClick={() => onPrevPage(currentPage - 1)}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 1.25L1 4.75L4.5 8.25" stroke="black"/>
                            <path d="M8.5 1.25L5 4.75L8.5 8.25" stroke="black"/>
                        </svg>
                        Предыдущая
                    </button>
                    {pageNumbers.map(item => (
                        <span 
                            key={item}
                            className={currentPage == Number(item) ? [styles.products__pagLink,styles.activeLink].join(' ') : styles.products__pagLink}
                            onClick={() => paginate(Number(item))}>
                                {item}
                        </span>
                    ))}
                    <button className={styles.products__pagBtnNext} onClick={() => onNextPage(currentPage + 1)}>
                        Следущая
                        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1.25L8.5 4.75L5 8.25" stroke="black"/>
                            <path d="M1 1.25L4.5 4.75L1 8.25" stroke="black"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.products__sort}>
                    <button className={styles.sort__button}>
                        Сортировать по популярности
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4.5L8 1" stroke="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.products__catalog}>
                {products.length > 0 ? products.map(item => (
                    <ProductItem item={item}/>
                )): <span>Товар не найден!</span>}
                
            </div>
        </div>
    )
}

export default Products
