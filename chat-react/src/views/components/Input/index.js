import React, { useState } from 'react';
import  _Input from './styled';

function Input( {onChange, handleSendMenssage, value}) {

  //const [value, setValue] = useState('');

  return (
    <_Input type="text" 
    value={value} 
    placeholder="Escribi un mensaje..." 
    autoComplete="off" 
    autoCorrect="off" 
    autoCapitalize="off" 
    maxLength='125' 
    onKeyPress={event => { (event.key === 'Enter') && handleSendMenssage() }} 
    onChange={onChange} spellCheck="false" />
  );
}

export default Input;
