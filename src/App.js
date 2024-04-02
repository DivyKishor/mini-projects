//import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import StarRating from './components/StarRating';
import LoadMoreData from './components/LoadMoreData';
import QrCode from './components/QrCode';
import IncrementCounter from './components/IncrementCounter';
import Header from './components/Header';
import Login from './components/Login';
import { Routes , Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import { MyContextProvider } from './components/MyContext';
import Sketch from './components/Sketch';
import Modals from './components/Modals';



function App() {

  return (
    <MyContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/counter" element={<IncrementCounter/>} />
      <Route path="/accordion" element={<Accordion/>} />
      <Route path="/stars" element={<StarRating noOfStars={10}/>} />
      <Route path="/qr" element={<QrCode value="Brave"/>} />
      <Route path="/loadmore" element={<LoadMoreData/>} />
      <Route path="/modal" element={<Modals/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </MyContextProvider>
  )
  
  // return (
  //   <div className="App">
  //     {/* <Header /> */}
  //     <IncrementCounter/>
  //     <hr/>
  //     <div>Accordion</div>
  //     <Accordion />
  //     <br/>
  //     <br/>
  //     <hr/>
  //     <div>Star Rating</div>
  //     <StarRating noOfStars={10}/>
  //     <hr/>
  //     <QrCode value="Brave" />
  //     <p>&nbsp;</p>
  //     <hr/>
  //     {/* load more product */}
  //     <LoadMoreData />
  //     <hr/>
      
  //   </div>
  // );
}

export default App;
