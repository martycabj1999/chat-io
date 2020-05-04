import React from 'react';
import { Title } from './styled';

const RoomTitle = React.forwardRef((props, ref) => (

  <div ref={ref} style={{width:'100%'}}>
    <Title {...props}>
    {props.children}
   </Title>
  </div>
  
));

export default RoomTitle;


