import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import './style.css';
import visualation from './assets/visualation.png';
import containerized from './assets/containerized.png';


function App() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Python', 'HTML/CSS', 'JavaScript', 'ML Frameworks', 'Bash Scripting', 'Git/GitHub'],
        datasets: [{
          label: 'Proficiency (%)',
          data: [90, 85, 75, 80, 70, 95],
          backgroundColor: ['#38bdf8', '#fbbf24', '#ef4444', '#10b981', '#5c3aed', '#7c3aed'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <img
          className="avatar"
          src="https://media.licdn.com/dms/image/v2/D4D03AQG4rldzNX-_RQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676548625238?e=1748476800&v=beta&t=Oa3-Dw4yAkhOcYTMtpcVqCajB15xVHWI7S1P7vfavnM"
          alt="Joseph Adeleke Avatar"
          loading="lazy"
        />
        <h1>Joseph Adeleke</h1>
        <p>DevOps Engineer | MSc Computer Science | ML, ASR &amp; NLP Enthusiast</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a Master's student specializing in Machine Learning, Automatic Speech Recognition, and Natural Language Processing.
          I enjoy solving complex problems and building innovative solutions. Let's connect on
          <a href="https://www.linkedin.com/in/joseph-adeleke-27b433149/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="https://github.githubassets.com/assets/quickdraw-default--medium-dark-477cc984c57a.png" alt="Ghana Voice" />
            <div className="project-info">
              <h3>GhanaVoice</h3>
              <p>GhanaVoice is a speech classification system that uses Convolutional Neural Networks (CNNs) to identify spoken Ghanaian languages. The system is designed to classify speech samples into one of five languages: Akan, Ewe, Dagbani, Dagaare, and Ikposo.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={containerized} alt="Containerize React App" />
            <div className="project-info">
              <h3>Containerize React App</h3>
              <p>react-docksmith is a modern React portfolio application showcasing a complete DevOps workflow—developing with React, containerizing with Docker, and deploying via Nginx. It features a multi-stage Docker build, local development setup, and push-to-Docker-Hub support for seamless deployment.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={visualation} alt="Advanced Iris Visualization" />
            <div className="project-info">
              <h3>advanced-iris-visualization</h3>
              <p>This project employs advanced visualization techniques on the Iris dataset to reveal distribution patterns and uncertainties using violin, box, bar, and KDE plots. It transforms complex statistical data into clear, actionable insights for both experts and general audiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="chart-container">
          <canvas ref={chartRef}></canvas>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:akdeljoseph@outlook.com">akdeljoseph@outlook.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/joseph-adeleke-27b433149/" target="_blank" rel="noopener noreferrer">linkedin.com/in/josephadeleke</a></p>
        <p>GitHub: <a href="https://github.com/jadeleke" target="_blank" rel="noopener noreferrer">github.com/josephadeleke</a></p>
        <p>Whatsapp: <a href="https://wa.com/233592868660" target="_blank" rel="noopener noreferrer">+233592868660</a></p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Joseph Adeleke. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
