import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <section className="dashboard-section heavy-education-section">
  
  {/* ⚠️ Top Notice Banner */}
  <div className="education-dummy-banner">
    <span className="banner-alert-icon">⚠️</span>
    <p><strong>Notice:</strong> This academic overview displays <span>Dummy Records</span> and projected timelines to evaluate the profile layout schema.</p>
  </div>

  {/* Section Main Header */}
  <div className="section-main-header">
    <h2 className="section-title-text">
      <span className="title-emoji">🎓</span> Academic Roadmap & Timeline
    </h2>
    <p className="section-sub-text">An institutional timeline showcasing current milestones, board certifications, and upcoming university tracks.</p>
  </div>

  {/* Timeline Core Grid Architecture */}
  <div className="education-timeline-container">
    
    {/* NODE 1: UPCOMING UNIVERSITY TRACK */}
    <div className="timeline-node-card upcoming-track">
      <div className="node-badge-glow blue-glow"></div>
      <div className="node-content-panel">
        <div className="node-header-row">
          <div className="institution-meta">
            <span className="academic-level-tag degree-tag">Upcoming B.Tech</span>
            <h3 className="college-name">Lovely Professional University (LPU)</h3>
          </div>
          <span className="academic-duration enrollment-pending">Admissions Open / 2026 - 2030</span>
        </div>
        <p className="node-description-text">
          Incoming undergraduate student enrolled in the Bachelor of Technology (B.Tech) program specializing in Computer Science and Engineering (CSE). Current goals include mastering advanced backend engineering, system designs, and automated scaling architectures.
        </p>
        <div className="focus-skills-row">
          <span className="focus-badge">Computer Science Core</span>
          <span className="focus-badge">Data Structures</span>
          <span className="focus-badge">Software Dev Track</span>
        </div>
      </div>
    </div>

    {/* NODE 2: RECENT 12TH PASS OUT */}
    <div className="timeline-node-card completed-track">
      <div className="node-badge-glow green-glow"></div>
      <div className="node-content-panel">
        <div className="node-header-row">
          <div className="institution-meta">
            <span className="academic-level-tag schooling-tag">Class XII (Senior Secondary)</span>
            <h3 className="college-name">Public Inter College / Senior Secondary Board</h3>
          </div>
          <span className="academic-duration clear-passed">Passed Out / 2024 - 2026</span>
        </div>
        <p className="node-description-text">
          Successfully completed Higher Secondary Education with a core focus on the Science stream (Physics, Chemistry, Mathematics). Developed basic algorithmic programming modules, script automation logic, and computational problem-solving workflows alongside board tracks.
        </p>
        <div className="focus-skills-row">
          <span className="focus-badge">Mathematics Grid</span>
          <span className="focus-badge">Physics Foundations</span>
          <span className="focus-badge">Computer Application</span>
        </div>
        <div className="academic-score-footer">
          Aggregated Performance Score: <strong>92.4% Distinction</strong>
        </div>
      </div>
    </div>

    {/* NODE 3: HIGH SCHOOL FOUNDATIONS */}
    <div className="timeline-node-card completed-track">
      <div className="node-badge-glow green-glow"></div>
      <div className="node-content-panel">
        <div className="node-header-row">
          <div className="institution-meta">
            <span className="academic-level-tag schooling-tag">Class X (Secondary School)</span>
            <h3 className="college-name">Public Inter College / Secondary Education</h3>
          </div>
          <span className="academic-duration clear-passed">Passed Out / 2022 - 2024</span>
        </div>
        <p className="node-description-text">
          Laid core mathematical and analytical foundations under standard generalized school curriculum modules. Participated actively in district-level science exhibitions, analytical quizzes, and computing labs.
        </p>
        <div className="academic-score-footer">
          Cumulative Grade Evaluation: <strong>9.2 CGPA Out of 10</strong>
        </div>
      </div>
    </div>

  </div>
</section>

  )
}

export default Education