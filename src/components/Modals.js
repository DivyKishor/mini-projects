import React, {useState} from 'react'
import Modal from 'react-modal';
import Btn from './Btn';
import logo from "../logo.svg";
import "../App.css";
import { IoMdClose } from "react-icons/io";

//Modal.setAppElement('#yourAppElement');
const Modals = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'purple';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      minWidth: '500px',
      minHeight: '500px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Btn onClick={openModal}>Open Modal</Btn>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <div>I am a modal</div>
        <div onClick={closeModal}className="close-box"><IoMdClose /></div>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </Modal>
    </div>
  )
}

export default Modals
