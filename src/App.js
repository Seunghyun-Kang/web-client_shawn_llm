import React from 'react';
import './App.css';

const dashboardData = {
  mainNumber: 9255,
  subData: [3.25, 2.25, 3.55, 5.52],
  chartData1: [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 30 },
    { label: "Mar", value: 50 },
    { label: "Apr", value: 70 },
    { label: "May", value: 60 },
    { label: "Jun", value: 80 },
  ],
  chartData2: [
    { label: "Jul", value: 60 },
    { label: "Aug", value: 80 },
    { label: "Sep", value: 90 },
    { label: "Oct", value: 70 },
    { label: "Nov", value: 50 },
    { label: "Dec", value: 40 },
  ],
  newsContent: "Breaking News: Significant event happening in the world. More details will follow...",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">DASHBOARD</div>
        <nav className="App-nav">
          <ul>
            <li><a href="#">MOVES</a></li>
            <li><a href="#">SOTD/SPDE</a></li>
            <li><a href="#">DEFC/GAME</a></li>
            <li><a href="#">NOWS</a></li>
            <li><a href="#">MOMIC</a></li>
            <li><a href="#">SHOWS</a></li>
            <li className="active"><a href="#">DASSANDQP</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="dashboard-section">
          <div className="dashboard-header">
            <h1>{dashboardData.mainNumber.toLocaleString()}</h1>
            <div className="sub-data">
              {dashboardData.subData.map((data, index) => (
                <div className="data-block" key={index}>{data}</div>
              ))}
            </div>
          </div>
          <div className="charts">
            <div className="chart">
              <h2>Main Content</h2>
              <div className="placeholder-chart">
                {dashboardData.chartData1.map((data, index) => (
                  <div key={index} className="chart-bar" style={{ height: `${data.value}%` }}>
                    <span>{data.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="chart">
              <h2>Main Content</h2>
              <div className="placeholder-chart">
                {dashboardData.chartData2.map((data, index) => (
                  <div key={index} className="chart-bar" style={{ height: `${data.value}%` }}>
                    <span>{data.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="additional-widgets">
            <div className="widget news-widget">
              <h2>News Prompt</h2>
              <div className="placeholder-news">
                <p>{dashboardData.newsContent}</p>
              </div>
            </div>
            <div className="widget">
              <h2>Chat Prompt Input</h2>
              <input type="text" placeholder="Type your message" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

