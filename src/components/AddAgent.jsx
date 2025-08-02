import React, { useState } from 'react';
import axios from 'axios';

const AddAgent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = async () => {
    try {
      await axios.post('/agent/add', { name, email });
      alert('Agent added');
    } catch (err) {
      alert('Error adding agent');
    }
  };

  return (
    <div className="container">
      <h2>Add Agent</h2>
      <div className="card">
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <button onClick={handleAdd}>Add Agent</button>
      </div>
    </div>
  );
};

export default AddAgent;