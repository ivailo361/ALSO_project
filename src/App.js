import './App.css';
import { Route, Switch } from 'react-router-dom'
import StockPage from './pages/home/stockPage'
import Header from './mainComponents/header/header'
import Configurator from './pages/configurator/configurator'
import Brands from './pages/brands/brands'
import ManufacturerPage from './pages/manufacturerStock/manufacturerStock'

function App() {
  return (
    <main className="Main">
      <Header />
      <Switch>
        <Route exact path="/" component={StockPage} />
        <Route path="/stock/:manufacturer" component={ManufacturerPage} />
        <Route path="/stock" component={StockPage} />
        <Route path="/configurator/:brand" component={Brands} />
        <Route path="/configurator/" component={Configurator} />
        <Route render={() => (<div>ERROR PAGE</div>)} />
      </Switch>
    </main>
  );
}

export default App;
