import React from 'react'
import './About.css'
const About = () => {

  return <>
  <section className="dashboard-section heavy-about-section">
  {/* Header with Title and Professional Status */}
  <div className="about-header-wrapper">
    <div className="about-title-left">
      <span className="about-icon-badge">👨‍💻</span>
      <div>
        <h2 className="heavy-about-heading">About Me</h2>
        <p className="about-sub-heading">Software Engineer & Competitive Programmer("⚙️ Sandbox Environment — Running on simulated database. All engineering metrics and user logs are dummy details."
)</p>
      </div>
    </div>
    <div className="availability-tag">
      <span className="green-pulse"></span>
      <span>Open to Opportunities</span>
    </div>
  </div>

  {/* Main Profile Grid Layout */}
  <div className="about-main-grid">
    
    {/* Left Column: Core Bio and Coding Philosophy */}
    <div className="about-bio-block">
      <h3>Engineering Identity</h3>
      <p className="bio-paragraph">
        I am a passionate Full-Stack Developer and avid problem solver who thrives on building efficient algorithms and highly scalable web architectures. With a strong foundation in data structures and algorithmic complexity, I bridge the gap between heavy backend logic and fluid user experiences.
      </p>
      <p className="bio-paragraph">
        Constantly engineering clean code solutions, debugging complex systems, and optimizing runtime performance across competitive programming platforms.
      </p>
    </div>

    {/* Right Column: Dynamic Matrix Stats */}
    <div className="about-matrix-grid">
      <div className="matrix-card">
        <span className="matrix-title">500+</span>
        <span className="matrix-subtitle">Problems Solved</span>
      </div>
      <div className="matrix-card">
        <span className="matrix-title">Global</span>
        <span className="matrix-subtitle">Ranked Coder</span>
      </div>
      <div className="matrix-card">
        <span className="matrix-title">95%</span>
        <span className="matrix-subtitle">Commit Rate</span>
      </div>
      <div className="matrix-card">
        <span className="matrix-title">1+ Year</span>
        <span className="matrix-subtitle">Dev Experience</span>
      </div>
    </div>

  </div>

  {/* Core Technical Expertise Block */}
  <div className="skills-matrix-wrapper">
    <h4>Core Technical Architecture</h4>
    
    <div className="skills-category-group">
      {/* Category 1 */}
      <div className="skill-cat-row">
        <span className="cat-label">Languages:</span>
        <div className="skills-bundle">
          <span className="skill-tag cpp">C++</span>
          <span className="skill-tag js">JavaScript (ES6+)</span>
          <span className="skill-tag html">HTML5 / CSS3</span>
        </div>
      </div>

      {/* Category 2 */}
      <div className="skill-cat-row">
        <span className="cat-label">Frameworks & Libs:</span>
        <div className="skills-bundle">
          <span className="skill-tag react">React.js</span>
          <span className="skill-tag node">Node.js</span>
          <span className="skill-tag express">Express.js</span>
        </div>
      </div>

      {/* Category 3 */}
      <div className="skill-cat-row">
        <span className="cat-label">Tools & Databases:</span>
        <div className="skills-bundle">
          <span className="skill-tag git">Git & GitHub</span>
          <span className="skill-tag mongo">MongoDB</span>
          <span className="skill-tag rest">REST APIs</span>
        </div>
      </div>
    </div>
  </div>
</section>


  </>
}

export default About