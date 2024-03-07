// Navigation.js
import React from 'react';
import { Row, Col, Anchor } from 'antd';
import Project from './Project'; // Import the Project component

const Header = () => (
  <div>
    <h1 style={{ textAlign: 'center', fontSize: '44px' }}>DAVID H</h1>
    <Navigation />
  </div>
);

const projects = [
  {
    id: 1,
    name: 'Password Generator',
    imageUrl: 'src/assets/images/project1.png',
    href: 'https://dvdhyn.github.io/mod3-challenge/'
  },
  {
    id: 2,
    name: 'Test Your Trivia Knowledge',
    imageUrl: 'src/assets/images/project2.png',
    href: 'https://dvdhyn.github.io/Test-Your-Trivia-Knowledge/'
  },
  {
    id: 3,
    name: 'Work Scheduler',
    imageUrl: 'src/assets/images/project3.png',
    href: 'https://dvdhyn.github.io/work-scheduler/'
  },
  {
    id: 4,
    name: 'Staff Manager',
    imageUrl: 'src/assets/images/project4.png',
    href: 'https://github.com/dvdhyn/staff-manager'
  },
  {
    id: 5,
    name: 'Task Tracker',
    imageUrl: 'src/assets/images/project5.png',
    href: 'https://boiling-savannah-32772-3ee8ac76a727.herokuapp.com/'
  },
  {
    id: 6,
    name: 'Check the Weather',
    imageUrl: 'src/assets/images/project6.png',
    href: 'https://dvdhyn.github.io/check-the-weather/'
  },
];

const Navigation = () => (
  <>
    <Row>
      <Col xs={24} sm={4}>
        <Anchor style={{ marginTop: '10px', marginBottom: '20px' }} items={[
          { key: 'about-me', href: '#about-me', title: 'ABOUT ME' },
          { key: 'portfolio', href: '#portfolio', title: 'PORTFOLIO' },
          { key: 'contact', href: '#contact', title: 'CONTACT' },
        ]}
        />
      </Col>
      <Col xs={24} sm={20}>
        <div id="about-me" style={{ height: '100vh', background: '#5BC0BE', padding: '50px', fontSize: '24px' }}>
        My name is David Hyun. I am a programming student exercising through a bootcamp curriculum at an accelerated pace. Over the next 6 months, I hope to gain proficiency in some of the most commonly used programming languages: HTML, CSS, and JavaScript. I am also learning how to use React, a popular JavaScript library for building user interfaces. I am excited to learn and grow as a developer. I am also excited to share my journey with you. I hope you enjoy my portfolio. Thank you for visiting!
        </div>
        <div id="portfolio" style={{ height: '140vh', background: '#3A506B' }} className="projectBox">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div id="contact" style={{ height: '100vh', background: '#1C2541' }}></div>
      </Col>
    </Row>
  </>
);

export default Header;
