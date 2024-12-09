import React, { useState } from 'react';

export default function ToggleSteps({ humanSteps, algorithmSteps }) {
  const [currentView, setCurrentView] = useState('human'); // Default to human steps

  const toggleSteps = () => {
    setCurrentView(currentView === 'human' ? 'algorithm' : 'human');
  };

  return (
    <div>
      <button onClick={toggleSteps} className="toggle-button">
        {currentView === 'human' ? 'Show Algorithm Steps' : 'Show Human Steps'}
      </button>
      {currentView === 'human' ? (
        <div id="human-steps">
          <h3>Human Steps</h3>
          <ol>
            {humanSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div id="algorithm-steps">
          <h3>Algorithm Steps</h3>
          <ol>
            {algorithmSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
