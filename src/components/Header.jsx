import React from 'react';
import { Anchor, Row, Col } from 'antd';

const Header = () => (
  <>
    <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '-5px' }}>DAVID HYUN</h1>
    <Navigation />
  </>
);

const Navigation = () => (
  <>
     <Row>
      <Col xs={24} sm={4}>
        <Anchor style={{ marginTop: '10px', marginBottom: '20px' }}  items={[
          { key: 'about-me', href: '#about-me', title: 'ABOUT ME' },
          { key: 'portfolio', href: '#portfolio', title: 'PORTFOLIO' },
          { key: 'contact', href: '#contact', title: 'CONTACT' },
        ]}
        />
      </Col>
      <Col xs={24} sm={20}>
        <div id="about-me" style={{ height: '100vh', background: '#5BC0BE' }} />
        <div id="portfolio" style={{ height: '100vh', background: '#3A506B' }} />
        <div id="contact" style={{ height: '100vh', background: '#1C2541' }} />
      </Col>
    </Row>
  </>
);

export default Header;
