import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './Products.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { products2 } from '../../../MOCK_DATA'
import Spinner from '../../UI/Spinner/Spinner'


const Products = ( ) => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state)
    const { allProducts,loading,currentPage,productsPerPage } = products
    const pageNumbers = []

        
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;

    const activeProducts = allProducts.splice(firstProductIndex,lastProductIndex)
    console.log(activeProducts)
    for(let i=1; i<= Math.ceil(allProducts.length / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    const onNextPage = (pageNumber) => {
        // if( pageNumber > lastPage ) {
        //     paginate(1)
        // } else {
        //     paginate(pageNumber)
        // }
    }
    const paginate = (page_number) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: page_number
        })
    }

    const onPrevPage = (pageNumber) => {
        // console.log(currentPage)
        // if (pageNumber <= 0 ) {
        //     paginate(lastPage)
        // } else {
        //     paginate(pageNumber)
        // }
    }

    React.useEffect(() => {
        dispatch({
            type: 'GET_ALLPRODUCTS_LOADING'
        })

        setTimeout(() => {
            dispatch({
                type: 'GET_ALLPRODUCTS_SUCCESS',
                payload: products2
            })
        },1000)
    },[dispatch])

    if ( loading ) return (<Spinner />)
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
                            className={currentPage === Number(item) ? [styles.products__pagLink,styles.activeLink].join(' ') : styles.products__pagLink}
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
                {activeProducts.length > 0 ? activeProducts.map(item => (
                    <ProductItem item={item} key={item.id}/>
                )): <span>Товар не найден!</span>}
                
            </div>
        </div>
    )
}

export default Products
