import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State for Dark Mode, Tabs, and Stats Filter
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('test');
  const [statFilter, setStatFilter] = useState('all');

  // Mock Data
  const playerData = {
    test: [
      { name: "Rohit Sharma", matches: 67, runs: "2,822", avg: 40.57, hundreds: 7, fifties: 18 },
      { name: "Virat Kohli", matches: 123, runs: "8,848", avg: 46.85, hundreds: 29, fifties: 30 },
    ],
    odi: [
      { name: "Rohit Sharma", matches: 273, runs: "11,168", avg: 48.76, hundreds: 32, hs: 264 },
      { name: "Virat Kohli", matches: 302, runs: "14,181", avg: 57.88, hundreds: 51, hs: 183 },
    ],
    t20i: [
      { name: "Rohit Sharma", matches: 159, runs: "4,231", avg: 32.05, hundreds: 5, fifties: 27 },
      { name: "Virat Kohli", matches: 125, runs: "4,188", avg: 48.69, hundreds: 1, fifties: 32 },
    ]
  };

  const statsHub = [
    { id: 1, category: "rohit", title: "Rohit Strike Rate", value: "140.89 in T20Is" },
    { id: 2, category: "kohli", title: "Kohli Average", value: "90.00+ in successful chases" },
  ];

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>🏏 Cricket Info Hub</h1>
        <p>Player Stats, Match Highlights & IPL Coverage</p>
      </header>

      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href="#players">Players</a>
            <a href="#matches">Matches</a>
            <a href="#stats">Stats Hub</a>
          </div>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      <div className="container">
        {/* --- Player Comparison Section --- */}
        <section id="players" className="section">
          <h2>Top Players Comparison</h2>
          <div className="section-pills">
            {['test', 'odi', 't20i'].map(tab => (
              <button 
                key={tab} 
                className={`pill-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()} Stats
              </button>
            ))}
          </div>

          <table>
            <thead>
              <tr>
                <th>Player</th><th>Matches</th><th>Runs</th><th>Avg</th><th>100s</th>
                <th>{activeTab === 'odi' ? 'HS' : '50s'}</th>
              </tr>
            </thead>
            <tbody>
              {playerData[activeTab].map((p, index) => (
                <tr key={index}>
                  <td>{p.name}</td>
                  <td>{p.matches}</td>
                  <td>{p.runs}</td>
                  <td>{p.avg}</td>
                  <td>{p.hundreds}</td>
                  <td>{activeTab === 'odi' ? p.hs : p.fifties}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* --- Matches Section --- */}
        <section id="matches" className="section">
          <h2>Recent IPL 2025 Matches</h2>
          <div className="match">
            <h3>SRH (278/3) beat KKR (168) by 110 runs</h3>
            <p>Match 68 – Rajiv Gandhi International Stadium.</p>
          </div>
          <div className="match">
            <h3>MI (177/1) beat CSK (176/5) by 9 wickets</h3>
            <p>Match 38 – MA Chidambaram Stadium.</p>
          </div>
        </section>

        {/* --- Stats Hub Section --- */}
        <section id="stats" className="section">
          <h2>📊 Stats Hub</h2>
          <div className="section-pills">
            {['all', 'rohit', 'kohli'].map(filter => (
              <button 
                key={filter} 
                className={`pill-btn ${statFilter === filter ? 'active' : ''}`}
                onClick={() => setStatFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <div className="stats-carousel">
            {statsHub
              .filter(s => statFilter === 'all' || s.category === statFilter)
              .map(stat => (
                <div key={stat.id} className="stats-card">
                  <h4>{stat.title}</h4>
                  <p>{stat.value}</p>
                </div>
              ))}
          </div>
        </section>
      </div>

      <footer>
        <p>Cricket Info Hub &copy; 2026 | Built for IPL Fans</p>
      </footer>
    </div>
  );
};

export default App;