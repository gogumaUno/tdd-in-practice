import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <form name="taxi-form" data-marker="full-form">
        <h2>Full Form</h2>
      </form>
      <form name="taxi-form-quick" data-marker="quick-form">
        <h2>Quick Form</h2>
      </form>
    </div>
  );
}

export default App;
