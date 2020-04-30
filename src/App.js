import React from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepages/homepage.component';
import ShopPage from './Pages/shop/shop.component.jsx';

const HatsPage = () => (
<div>
  <h1>Hats Page</h1>
</div>

);

const TopicDetail = (props) => {
  console.log (props)
  return(
  <div>
    <h1>Topic List Detail Page : {props.match.params.topicsid}</h1>
  </div> );
  
};

  const TopicList = () => (
    <div>
      <h1>Topics List</h1>
    </div>
    
    );

function App() {
 return <div>
   <Route exact path = '/' component ={HomePage} />
   <Route path = '/shop' component ={ShopPage} />
   <Route  path ='/topics' component ={TopicList} />
   <Route  path ='/topics/:topicsid' component ={TopicDetail} />
    </div>
  
}

export default App;
