import React from 'react';
import { Row, Col } from 'react-grid';
import { Container_, LogoText } from './styled';
import { IoIosBug } from "react-icons/io";

const Header = React.forwardRef(({children}, ref) => (
  <Col xs={12} sm={12} md={12} style={{padding:'0'}}>
    <header ref={ref}>
      <Container_ fluid>
        <Row>
            <Col>
              <LogoText><IoIosBug  style={{verticalAlign: 'text-top'}}  /> {children}</LogoText>
            </Col>
        </Row>
      </Container_>
    </header>
  </Col>
));

export default Header;
