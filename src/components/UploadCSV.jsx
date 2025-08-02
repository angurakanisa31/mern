import React, { useState } from 'react';
import axios from 'axios';

const UploadCSV = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('csv', file);

    try {
      await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('CSV uploaded');
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div className="container">
      <h2>Upload CSV</h2>
      <div className="card">
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadCSV;