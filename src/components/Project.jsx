// Project.js
import React from 'react';

const Project = ({ project }) => {
  return (
    <div style={{ backgroundColor: '#3A506B' }}>
      <h2 style={{ backgroundColor: '#3A506B', textAlign: 'center' }}>{project.name}</h2>
      <a href={project.href}>
      <img src={project.imageUrl} alt={project.name} style={{ maxWidth: '400px',backgroundColor: '#3A506B' }} />
      </a>
      <div style={{ backgroundColor: '#3A506B', textAlign: 'center' }}><a href={project.gitLink}>GitHub</a></div>
    </div>
  );
};

export default Project;
