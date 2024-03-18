//import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import StarRating from './components/StarRating';
import LoadMoreData from './components/LoadMoreData';
import QrCode from './components/QrCode';
import IncrementCounter from './components/IncrementCounter';
// import { useEffect } from 'react';


function App() {
  
  return (
    <div className="App">
      <IncrementCounter/>
      <hr/>
      <div>Accordion</div>
      <Accordion />
      <br/>
      <br/>
      <hr/>
      <div>Star Rating</div>
      <StarRating noOfStars={10}/>
      <hr/>
      <QrCode value="Brave" />
      <p>&nbsp;</p>
      <hr/>
      {/* load more product */}
      <LoadMoreData />
      <hr/>
      
    </div>
  );
}

export default App;
