import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddAgent from './components/AddAgent';
import UploadCSV from './components/UploadCSV';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-agent" element={<AddAgent />} />
      <Route path="/upload-csv" element={<UploadCSV />} />
    </Routes>
  );
}

export default App;