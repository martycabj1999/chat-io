import React from 'react';
import { ContainerMessage, MessageBox } from './styled';

function Message(props) {

  const {message, user} = props;
  //const username = localStorage.getItem('username');
 
  return (
    <ContainerMessage>
      <MessageBox username={user}>
        {message}
      </MessageBox> 
    </ContainerMessage>
  );
}

export default Message;
