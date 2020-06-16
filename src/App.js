import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from "./Pages/Homepage/homepage.component";

const Hats = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);
function App() {
  return (
    <div className="App">
        <switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop/hats" component={Hats}/>
        </switch>
    </div>
  );
}

export default App;
