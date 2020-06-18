import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from "./Pages/Homepage/homepage.component";
import ShopPage from "./Pages/Shoppage/shop-page.component";
import Header from "./Components/header/header.component";


function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
