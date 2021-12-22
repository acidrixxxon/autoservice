import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './Products.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import Spinner from '../../UI/Spinner/Spinner'
import Pagination from '../Pagination/Pagination'
import { getProducts } from '../../../redux/actions/productActions'


const Products = ( ) => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state)
    const { allProducts,loading,currentPage,productsPerPage } = products

    React.useEffect(() => {
        dispatch(getProducts(currentPage,productsPerPage))
    },[dispatch,currentPage])

    if ( loading ) return <Spinner />
    return  (
        <>
            { allProducts && (
                <div className={styles.products__container}>
                    <div className={styles.products__topBlock}>
                        <Pagination />

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
                    {allProducts && allProducts.map(item => (
                        <ProductItem item={item} key={item.id}/>
                    )) }

                    {allProducts.length == 0 && <span>Товар не найден!</span>}
                </div>
            </div>) }
        </>
    )
                    }

export default Products
