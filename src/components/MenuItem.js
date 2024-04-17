import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// const newPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("words"), 1000);
//   });
// };

// newPromise()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const MenuItem = ({categoryLabel, categoryItems}) => {
  const [showDiv, setShowDiv] = useState(true);
  const options = categoryItems;

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setShowDiv(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div>
      <div
        ref={divEl}
        className="w-36"
        onClick={() => setShowDiv(!showDiv)}
        onMouseEnter={() => setShowDiv(true)}
      >
        {categoryLabel}
      </div>
      {showDiv && (
        <div className="m-2 p-2 w-28">
          {options.map((opt) => (
            <Link to={opt.link} key={opt.label}>
              <div className="">{opt.label}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
