import React from 'react';
import { Anchor, Row, Col } from 'antd';

const Header = () => (
  <>
    <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '-5px' }}>My React Portfolio</h1>
    <Row>
      <Col xs={24} sm={4}>
        <Anchor style={{ marginTop: '10px', marginBottom: '20px'}} items={[
          { key: 'about-me', href: '#about-me', title: 'About Me' },
          { key: 'portfolio', href: '#portfolio', title: 'Portfolio' },
          { key: 'contact', href: '#contact', title: 'Contact' },
        ]}
        />
      </Col>
      <Col xs={24} sm={20}>
        <div id="about-me" style={{ height: '100vh', background: 'white' }} />
        <div id="portfolio" style={{ height: '100vh', background: 'gray' }} />
        <div id="contact" style={{ height: '100vh', background: 'black' }} />
      </Col>
    </Row>
  </>
);
export default Header;
