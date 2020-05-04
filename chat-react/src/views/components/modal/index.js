import React from 'react';
import ReactDom from 'react-dom';

function Modal() {
  
  const node = (
    <h1 onClick={() => alert("Hello!")}>Modal</h1>
  );
  
  return  ReactDom.createPortal(node, window.parent.document.body)

}

export default Modal;