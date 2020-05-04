import React from 'react';
import { Row, Col, Container } from 'react-grid';
import {Aside as Aside_} from './styled';


function Aside({children, height}) {
  return (
    <Col xs={2}  sm={2} md={2} style={{padding:'0', height:height} }>
        <Aside_>
            <Row >
                <Col >
                  {children}
                </Col>
            </Row>
        </Aside_>
  </Col>
  );
}

export default Aside;
