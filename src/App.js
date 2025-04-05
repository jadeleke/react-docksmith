import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './style.css';

function App() {
  useEffect(() => {
    // Initialize the skills chart when the component mounts
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
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
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
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
            <img src="language-identification.jpg" alt="Language Identification Project" />
            <div className="project-info">
              <h3>Ghanaian Language Identification</h3>
              <p>Wav2Vec-powered model for classifying Ghanaian languages from audio samples.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="cnn-akan.jpg" alt="CNN Akan Twi Project" />
            <div className="project-info">
              <h3>CNN Image Classifier in Akan Twi</h3>
              <p>Image classification using CNN, labeling images in Akan Twi.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="https://github.githubassets.com/assets/quickdraw-default--medium-dark-477cc984c57a.png" alt="Ghana Voice" />
            <div className="project-info">
              <h3>GhanaVoice</h3>
              <p>
                GhanaVoice is a speech classification system that uses Convolutional Neural Networks (CNNs) to identify spoken Ghanaian languages.
                The system is designed to classify speech samples into one of five languages: Akan, Ewe, Dagbani, Dagaare, and Ikposo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="chart-container">
          <canvas id="skillsChart"></canvas>
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
