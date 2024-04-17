import React from 'react'
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const Header = () => {

  const menuListStatic = [
    { label: "modal", link: "/modal" },
    { label: "accordion", link: "/accordion" },
    { label: "star rating", link: "/stars" },
  ];
  
  return (
    <div className="flex justify-between">
    <div className="w-36">
        {/* <img alt="logo" className="logo" src={LOGO_URL}></img> */}
    </div>
    <div className="">
        <ul className="flex items-center wrap">
            <li className="m-4 p-4"></li>
            <li className="m-4 p-4"><Link to="/">Home</Link></li>
            <li className='m-4 p-4'><MenuItem categoryLabel={"static Components"} categoryItems={menuListStatic} /></li>
            {/* <li className="m-4 p-4"><Link to="/wordcloud">Word Cloud</Link></li> */}
            {/* <li className="m-4 p-4"><Link to="/modal">Modal</Link></li> */}
            <li className="m-4 p-4"><Link to="/todo">To do List</Link></li>
            <li className="m-4 p-4"><Link to="/reduxtodo">Redux Todo</Link></li>
            {/* <li className="m-4 p-4"><Link to="/accordion">Accordion</Link></li> */}
            <li className="m-4 p-4"><Link to="/loadmore">Load More Item</Link></li>
            <li className="m-4 p-4"><Link to="/qr">QR Code</Link></li>
            {/* <li className="m-4 p-4"><Link to="/stars">Star Rating</Link></li> */}
            {/* <li className="m-4 p-4"><Link to="/halfstars">Half Stars Rating</Link></li> */}
            <li className="m-4 p-4"><Link to="/counter">Counter</Link></li>
            <li className="m-4 p-4"><Link to="/countertick">AutoIncrementCounter</Link></li>
            <li className="m-4 p-4"><Link to="/test">Test (draw cards)</Link></li>
            <li className="m-4 p-4"><Link to="/pagination">Pagination</Link></li>
            <li className="m-4 p-4">Log in</li>
        </ul>
    </div>
</div>
  )
}

export default Header
