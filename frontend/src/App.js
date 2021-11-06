import { Switch, Route } from 'react-router-dom';
import Header from './components/elements/Header/Header';
import './GlobalStyles.module.scss';
import CatalogPage from './pages/Catalog/Catalog.page';
import HomePage from './pages/Homepage/Home.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/catalog" component={CatalogPage} exact />
    </div>
  );
}

export default App;
