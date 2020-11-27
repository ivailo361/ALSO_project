import './App.css';
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import StockPage from './pages/home/stockPage'
import Header from './mainComponents/header/header'
import Configurator from './pages/configurator/configurator'
import Brands from './pages/brands/brandConfig'
import ManufacturerPage from './pages/manufacturerStock/manufacturerStock'

function App() {
  return (
    <Main className="Main">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={StockPage} />
          <Route path="/stock/:manufacturer" component={ManufacturerPage} />
          <Route path="/stock" component={StockPage} />
          <Route path="/configurator/:brand" component={Brands} />
          <Route path="/configurator/" component={Configurator} />
          <Route render={() => (<div>ERROR PAGE</div>)} />
        </Switch>
      </Container>
    </Main>
  );
}

export default App;

const Main = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
  flex-grow: 2
`