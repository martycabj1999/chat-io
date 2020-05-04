import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/header';
import Aside from '../../components/aside';
import Chat from '../../components/chat';
import { Row, Container, Col } from 'react-grid';
import useWindowDimensions from '../../hooks/windowsDimension';
import { isMobile } from 'mobile-device-detect';

function Home() {

  const headerRef = useRef(null);
  const [  headerHeight, setHeaderHeight ] = useState(0)
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    let { clientHeight } = headerRef.current;
    localStorage.setItem("username", Math.floor(Math.random() * (99999999999 - 0) + 0));
    setHeaderHeight(clientHeight);
  }, []);
  
  return (
    < >
      <Container fluid  >
        <Row>
            <Header  ref={headerRef} >
              Zoxed - width: {width} ~ height: {height} ~ headerHeight: { headerHeight}
            </Header>

            {!isMobile &&
            
            <Aside height={height-headerHeight}>
                Aside
            </Aside>
            }

          <Col xs={12} sm={12} md={10} style={{padding:0}}>
            <Chat height={height-headerHeight} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
