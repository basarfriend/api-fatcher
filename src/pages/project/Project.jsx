import React from 'react'
import { Link, Links } from 'react-router-dom'
import '/home/basar/reactBASAR/src/pages/project/project.css' 
const Project = () => {
  return <>
  
  <section className="dashboard-section real-projects-section">
  
  {/* ⚠️ Top Notice Banner */}
  <div className="project-dummy-banner">
    <span className="banner-alert-icon">⚠️</span>
    <p><strong>Notice:</strong> This project showcase displays <span>Dummy Records</span> and placeholder repositories to evaluate the frontend dashboard grid.</p>
  </div>

  {/* Section Main Header */}
  <div className="section-main-header">
    <h2 className="section-title-text">
      <span className="title-emoji">💻</span> My Creations & Builds
    </h2>
    <p className="section-sub-text">A massive repository grid of 10 web applications, utilities, and full-stack systems I have engineered.</p>
  </div>

  {/* Projects Main Grid Block (10 Cards) */}
  <div className="projects-display-grid">
    
    {/* PROJECT 1: E-COMMERCE */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">Full Stack</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">ShopCart — Modern E-Commerce Platform</h3>
      <p className="proj-desc">A full-featured shopping application built with React. Features product filtering, an interactive add-to-cart state pipeline, and a fluid checkout layout.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">React.js</span>
        <span className="tech-badge">Context API</span>
        <span className="tech-badge">CSS Grid</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 2: WEATHER APP */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">API Integration</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">SkyCast — Real-Time Weather Dashboard</h3>
      <p className="proj-desc">An asynchronous tracking system that fetches live meteorological data feeds using Axios. Built to parse nested JSON responses and render weather states on a custom grid.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">Axios client</span>
        <span className="tech-badge">REST APIs</span>
        <span className="tech-badge">JavaScript</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 3: CALCULATOR ENGINE */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">Utility App</span>
        <span className="proj-status-badge review-status">Refactoring</span>
      </div>
      <h3 className="proj-title">MathEngine — Advanced Matrix Calculator</h3>
      <p className="proj-desc">A precise calculation tool built to solve arithmetic matrices and custom scientific strings. Uses algorithmic regex pattern parsing to sequence operator precedence.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">HTML5</span>
        <span className="tech-badge">CSS Flexbox</span>
        <span className="tech-badge">Algorithms</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 4: REALTIME CHAT APP */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">WebSockets</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">DevChat — Multi-Room Messaging Tool</h3>
      <p className="proj-desc">A dynamic instant messaging layout with multi-room capabilities. Manages active socket connections, custom connection states, and instant message message synchronization panels.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">Node.js</span>
        <span className="tech-badge">Socket.io</span>
        <span className="tech-badge">React</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 5: EXPENSE TRACKER */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">Finance Management</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">FinTrack — Personal Budgeting Tool</h3>
      <p className="proj-desc">An interactive finance dashboard utilizing browser local storage persistence. Tracks monthly transaction models, aggregates absolute debit limits, and visualizes expense charts.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">React Hooks</span>
        <span className="tech-badge">Local Storage</span>
        <span className="tech-badge">CSS charts</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 6: JWT AUTHENTICATION SYSTEM */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">Cyber Security</span>
        <span className="proj-status-badge review-status">Securing</span>
      </div>
      <h3 className="proj-title">SecureGate — JWT Node Authentication</h3>
      <p className="proj-desc">A heavy backend security logic script demonstrating standard user registration procedures, bcrypt password hashing matrices, token refresh flows, and protected endpoint routes.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">Express.js</span>
        <span className="tech-badge">JWT Tokens</span>
        <span className="tech-badge">Bcrypt</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 7: CRYPTO TRACKING MATRIX */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">Web3 Visuals</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">CoinPulse — Live Cryptocurrency Metrics</h3>
      <p className="proj-desc">A sleek token tracker consuming live endpoints from external pricing feeds. Implements custom live search filters and structural infinite scroll grids for high data stability.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">CoinGecko API</span>
        <span className="tech-badge">Axios client</span>
        <span className="tech-badge">Tailwind</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 8: PERSONAL DEV PORTFOLIO */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">UI / UX Showcase</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">DevSpace — Premium Engineering Portfolio</h3>
      <p className="proj-desc">A full-screen interactive space optimized for personal skill showcase. Features robust media break conditions, responsive split screens, and fluid theme state shifts.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">HTML5 Core</span>
        <span className="tech-badge">CSS Animations</span>
        <span className="tech-badge">JS DOM</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 9: ADVANCED TO-DO LOGIC */}
    <div className="individual-project-card">
      <div className="card-top-row">
        <span className="proj-category-tag">Task Automation</span>
        <span className="proj-status-badge active-status">Completed</span>
      </div>
      <h3 className="proj-title">TaskFlow — KanBan Task Manager</h3>
      <p className="proj-desc">An advanced multi-lane task management board script. Uses element node tracking for drag-and-drop workflow updates, task priority categorization, and custom data filters.</p>
      <div className="proj-tech-row">
        <span className="tech-badge">React State</span>
        <span className="tech-badge">Drag & Drop</span>
        <span className="tech-badge">Vanilla CSS</span>
      </div>
      <div className="proj-links-row">
        <a href="#github" className="action-link repo-btn">GitHub Code</a>
        <a href="#live" className="action-link demo-btn">Live Preview →</a>
      </div>
    </div>

    {/* PROJECT 10: MOVIE DATABASE EXPLORER */}
    {/* PROJECT 10: MOVIE DATABASE EXPLORER (FIXED) */}
<div className="individual-project-card">
  <div className="card-top-row">
    <span className="proj-category-tag">Media Engine</span>
    <span className="proj-status-badge review-status">Refactoring</span>
  </div>
  <h3 className="proj-title">CineSearch — TMDB Media Browser</h3>
  <p className="proj-desc">
    A client portal consuming async media parameters. Integrates debounced input triggers to fetch real-time data objects without hitting API request caps prematurely.
  </p>
  <div className="proj-tech-row">
    <span className="tech-badge">TMDB API</span>
    <span className="tech-badge">Debounce Hook</span>
    <span className="tech-badge">React Router</span>
  </div>
  <div className="proj-links-row">
    <a href="#github" className="action-link repo-btn">GitHub Code</a>
    <a href="#live" className="action-link demo-btn">Live Preview →</a>
  </div>
</div>
 
  </div>
  
  </section>
  </>
}

export default Project