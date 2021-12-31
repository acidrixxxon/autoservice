import React from 'react'
import './SearchPage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import SearchForm from '../../components/UI/SearchForm/SearchForm'
import Sidefilters from '../../components/elements/Sidefilters/Sidefilters'
import { searchProducts } from '../../redux/actions/productActions'
import ProductItem from '../../components/elements/ProductItem/ProductItem'
import Spinner from '../../components/UI/Spinner/Spinner.jsx'


const SearchPage = () => {
    const { products } = useSelector(state => state)
    const { allProducts,error,loading} = products
    const dispatch = useDispatch()
    const params = useParams()
    const { query } = params 
    console.log(query)
    React.useEffect(() => {
        dispatch(searchProducts(query))
    },[])

    return (
        <section id="search">
            <div className="search__container">
                Ищем {query}
                
                <div className="search__setts">
                    <SearchForm />

                    
                </div>

                <main id="search__main">
                    <aside className='search__main-sidebar'>
                        <Sidefilters />
                    </aside>

                    <section id="search__main-content">
                        {error && <span>{error}</span>}
                        {loading && <Spinner />}
                        {allProducts.length > 0 && allProducts.map(product => (
                            <ProductItem item={product} key={product.id} />
                        ))}
                    </section>
                </main>
            </div>
        </section>
    )
}

export default SearchPage
