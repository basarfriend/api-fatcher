import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
  const location = useLocation()
  const navigate = useNavigate()
const { img, name, leet, cfRank } = location.state || {};

  return (
    <div className="profile-page-wrapper">
      {/* Top Navigation Bar */}
      <nav className="profile-navbar">
        <button className="back-link-btn" onClick={() => navigate(-1)}>
          ← Back to Dashboard
        </button>
        <span className="nav-title">Coder Profile</span>
      </nav>

      {/* Main Profile Layout */}
      <div className="profile-main-container">
        
        {/* Left Side: Avatar and Name */}
        <div className="profile-left-hero">
          <div className="avatar-frame">
            <img src={img} alt={name} className="user-main-avatar" />
          </div>
          <h1 className="user-display-name">{name}</h1>
          <p className="user-status-tag">Verified Competitive Programmer</p>
        </div>

        {/* Right Side: Detailed Dashboard Metrics */}
        <div className="profile-right-content">
          <h2 className="section-heading">Platform Statistics</h2>
          
          <div className="metrics-grid">
            {/* LeetCode Row */}
            <div className="metric-row-card leetcode-row">
              <div className="metric-info">
                <h3>LeetCode Platform</h3>
                <p>Overall problem solving score and consistency</p>
              </div>
              <div className="metric-badge">{leet}</div>
            </div>

            {/* Codeforces Row */}
            <div className="metric-row-card codeforces-row">
              <div className="metric-info">
                <h3>Codeforces Rank</h3>
                <p>Current division and global standing</p>
              </div>
              <div className="metric-badge">{cfRank}</div>
            </div>

            {/* AIR Row */}
            <div className="metric-row-card air-row">
              <div className="metric-info">
                <h3>All India Rank (AIR)</h3>
                <p>Estimated rank among active users</p>
              </div>
              <div className="metric-badge">#452</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
