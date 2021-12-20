import { Switch, Route } from 'react-router-dom';
import Header from './components/elements/Header/Header';
import './GlobalStyles.module.scss';
import CatalogPage from './pages/Catalog/Catalog.page';
import HomePage from './pages/Homepage/Home.page';
import ProductPage from './pages/ProductPage/Product.page';
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
      </Switch>
    </div>
  );
}

export default App;
