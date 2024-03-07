// Project.js
import React from 'react';

const Project = ({ project }) => {
  return (
    <div style={{ backgroundColor: '#3A506B' }}>
      <h2 style={{ backgroundColor: '#3A506B', textAlign: 'center' }}>{project.name}</h2>
      <a href={project.href}>
      <img src={project.imageUrl} alt={project.name} style={{ maxHeight: '200px' }} />
      </a>
    </div>
  );
};

export default Project;
