import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="container">
    <h2>Dashboard</h2>
    <div className="card">
      <Link to="/add-agent">➕ Add Agent</Link>
      <Link to="/upload-csv">📁 Upload CSV</Link>
    </div>
  </div>
);

export default Dashboard;