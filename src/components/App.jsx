import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPageContainer from '../container/StartPageContainer';
import LoginContainer from '../container/LoginContainer';
import CatalogContainer from '../container/CatalogContainer';
import MarketContainer from '../container/MarketContainer';
import CartContainer from '../container/CartConatiner';
import HeaderContainer from '../container/HeaderContainer';
import ProductItemContainer from '../container/ProductItemContainer';
import SearchContainer from '../container/SearchContainer';
import SettingContainer from '../container/SettingContainer';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import styles from './App.module.css';
import loader from 'hoc-react-loader';
import Preloader from '../common/Preloader/Preloader';

const App = ({initialize}) => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.App__header} >
          <HeaderContainer />
        </div>
        <div className={styles.App__main}>
          <Switch>
            <Route exact path='/' render={() => <StartPageContainer />} />
            <Route path='/login' render={() => <LoginContainer />} />
            <Route exact path='/market' render={() => <CatalogContainer /> }/>
            <Route exact path='/market/:category' render={() => <MarketContainer />}/>
            <Route exact path='/market/:category/:id' render={() => <ProductItemContainer />}/>
            <Route path='/cart' render={() => <CartContainer /> } />
            <Route exact path='/search' render={() => <SearchContainer /> } />
            <Route exact path='/search/:id' render={() => <ProductItemContainer />} />
            <Route path='/setting' render={() => <SettingContainer />} />
            <Route path='*' render={() => <PageNotFound /> } />
          </Switch>
        </div>
        <div className={styles.App__footer}> 
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default loader({print: ['initialize'], LoadingIndicator: Preloader})(App);