import React from 'react';
import { Row, Col, Anchor } from 'antd';
import Project from './Project';
import Contact from './Contact';

const Header = () => (
  <div>
    <h1 style={{ textAlign: 'center', fontSize: '44px' }}>DAVID HYUN (Student Developer)</h1>
    <Navigation />
  </div>
);

const projects = [
  {
    id: 1,
    name: 'Password Generator',
    imageUrl: '/img/project1.png',
    href: 'https://dvdhyn.github.io/mod3-challenge/',
    gitLink: 'https://github.com/dvdhyn/mod3-challenge'
  },
  {
    id: 2,
    name: 'Test Your Trivia Knowledge',
    imageUrl: '/img/project2.png',
    href: 'https://dvdhyn.github.io/Test-Your-Trivia-Knowledge/',
    gitLink: 'https://github.com/dvdhyn/Test-Your-Trivia-Knowledge'
  },
  {
    id: 3,
    name: 'Work Scheduler',
    imageUrl: '/img/project3.png',
    href: 'https://dvdhyn.github.io/work-scheduler/',
    gitLink: 'https://github.com/dvdhyn/work-scheduler'
  },
  {
    id: 4,
    name: 'Staff Manager',
    imageUrl: '/img/project4.png',
    href: 'https://github.com/dvdhyn/staff-manager',
    gitLink: 'https://github.com/dvdhyn/staff-manager'
  },
  {
    id: 5,
    name: 'Task Tracker',
    imageUrl: '/img/project5.png',
    href: 'https://boiling-savannah-32772-3ee8ac76a727.herokuapp.com/',
    gitLink: 'https://github.com/dvdhyn/task-tracker'
  },
  {
    id: 6,
    name: 'Check the Weather',
    imageUrl: '/img/project6.png',
    href: 'https://dvdhyn.github.io/check-the-weather/',
    gitLink: 'https://github.com/dvdhyn/check-the-weather'
  },
];

const Navigation = () => (
  <>
    <Row>
      <Col span={4}>
        <Anchor items={[
          { key: 'about-me', href: '#about-me', title: 'ABOUT ME' },
          { key: 'portfolio', href: '#portfolio', title: 'PORTFOLIO' },
          { key: 'contact', href: '#contact', title: 'CONTACT' },
          { key: 'resume', href: '/other-assets/resume.pdf', title: 'RESUME', target: '_blank'}
        ]}
        />
      </Col>
      <Col span={20}>
        <div id="about-me" style={{ minHeight: '20vh', background: '#5BC0BE', fontSize: '20px', display: 'flex', alignItems: 'center', padding: '100px' }}>
          <img src="/img/profile.jpg" alt="David Hyun" style={{ float: 'left', marginRight: '20px', borderRadius: '50%', width: '200px', height: '200px' }} />
          My name is David Hyun. I am a programming student exercising through a bootcamp curriculum at an accelerated pace. Over the next 6 months, I hope to gain proficiency in some of the most commonly used programming languages: HTML, CSS, and JavaScript. I am also learning how to use React, a popular JavaScript library for building user interfaces. I hope you enjoy my portfolio. Thank you for visiting!
        </div>
        <div id="portfolio" style={{ minHeight: '80vh', background: '#3A506B', padding: '20px' }} className="projectBox">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div id="contact" style={{ minHeight: '100vh', background: '#6FFFE9' }}><Contact /></div>
      </Col>
    </Row>
  </>
);

export default Header;
