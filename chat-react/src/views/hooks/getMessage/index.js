import React, { useState, useEffect } from 'react';
import {socket} from '../../../core/socket.config';

export default function  useMesagge  () {
const [ messages , setMessages ] = useState([])

  useEffect(() => {

    try {
        socket.on('reciveMessage', (messageFromSocket)=>{
          let stateMessages = messages;
          stateMessages.push(messageFromSocket)
          setMessages([...messages], stateMessages);
      })


    }catch (error) {
        console.log(error);
    }
    return () => {
        socket.close();
    };

  }, []);

  return messages;

};





