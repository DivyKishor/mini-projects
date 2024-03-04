import React, { useState } from "react";
import data from "../data";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleClick(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function handleMultipleClick(id) {
    let cpyMultiple = [...multiple];
    const findIndexOf = cpyMultiple.indexOf(id);

    if (findIndexOf === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOf, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div>
      <button onClick={() => setEnableMultiSelect(true)}
      className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 ">
        Enable Multi Select
      </button>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="cursor-pointer hover:bg-slate-200 border border-black flex justify-center"
              onClick={
                enableMultiSelect
                  ? () => handleMultipleClick(item.id)
                  : () => handleClick(item.id)
              }
            >
              {item.label}
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <FaAngleUp className="mt-1"/>
              ) : (
                <FaAngleDown className="mt-1"/>
              )}
            </div>
            {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
              <div>{item.desc}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
