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
import Modals from './components/Modals';
import ToDoList from './components/ToDoList';
import EasyAnnotation from './components/EasyAnnotation';
import StarRating2 from './components/StarRating2';
import Test from './components/Test';
import PaginationExample from './components/PaginationExample';
import AddTodo from './components/AddTodo';
import AutoIncrementCounter from './components/AutoIncrementCounter';
import Aggrid from './components/Aggrid';
import FakeStore from './components/FakeStore';


function App() {

  return (
    <MyContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/annotation" element={<EasyAnnotation/>} />
      <Route path="/todo" element={<ToDoList/>} />
      <Route path="/FakeStore" element={<FakeStore/>} />
      <Route path="/reduxtodo" element={<AddTodo/>} />
      <Route path="/counter" element={<IncrementCounter/>} />
      <Route path="/countertick" element={<AutoIncrementCounter/>} />
      <Route path="/accordion" element={<Accordion/>} />
      <Route path="/stars" element={<StarRating/>} />
      <Route path="/halfstars" element={<StarRating2 initialRating={3.5} totalStars={5} />} />
      <Route path="/qr" element={<QrCode value="Brave"/>} />
      <Route path="/loadmore" element={<LoadMoreData/>} />
      <Route path="/modal" element={<Modals/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/grid" element={<Aggrid/>} />
      <Route path="/pagination" element={<PaginationExample/>} />
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
