import React from 'react'
import './SearchPage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import SearchForm from '../../components/UI/SearchForm/SearchForm'
import Sidefilters from '../../components/elements/Sidefilters/Sidefilters'
import { searchProducts } from '../../redux/actions/productActions'
import ProductItem from '../../components/elements/ProductItem/ProductItem'
import Pagination from '../../components/elements/Pagination/Pagination.jsx'
import Spinner from '../../components/UI/Spinner/Spinner.jsx'


const SearchPage = () => {
    const { products } = useSelector(state => state)
    const { allProducts,error,loading,currentPage } = products
    const dispatch = useDispatch()
    const params = useParams()
    const { query } = params 

    
    React.useEffect(() => {
        dispatch(searchProducts(query,currentPage))
    },[dispatch,currentPage])

    return (
        <section id="search">
            <div className="search__container">
                
                <div className="search__setts">
                    <SearchForm />
                </div>

                <main className="search__main">
                    <aside className='search__main-sidebar'>
                        <Sidefilters  filtersprops={[{title: 'Состояние',variants: ['Новое','БУ']}]} />
                    </aside>

                    <section className="search__main-content">
                        {error && <span>{error}</span>}
                        {loading && <Spinner />}
                        {allProducts.length > 0 && (
                            <div className="search__main-container">
                                <Pagination />
                                <div className="search__main-products">
                                    {
                                        allProducts.map(product => (
                                            <ProductItem item={product} key={product.id} />
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </section>
    )
}

export default SearchPage
