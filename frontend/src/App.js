import { Switch, Route } from 'react-router-dom';
import Header from './components/elements/Header/Header';
import './GlobalStyles.module.scss';
import CatalogPage from './pages/Catalog/Catalog.page';
import HomePage from './pages/Homepage/Home.page';
import NotFound from './pages/NotFound/NotFound';
import ProductPage from './pages/ProductPage/Product.page';
import SearchPage from './pages/SearchPage/Search.page';
import Testpage from './pages/Testpage/Testpage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/catalog" component={CatalogPage} exact />
        <Route path="/product/:id" component={ProductPage} exact />
        <Route path="/test" component={Testpage} exact />
        <Route path="/search/mark=:query" component={SearchPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
