import React from 'react';

interface PromptDisplayProps {
  prompt: string;
  onCopy: () => void;
}

export const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt, onCopy }) => {
  return (
    <div className="prompt-display">
      <div className="prompt-header">
        <h3>Prompt</h3>
        <button onClick={onCopy} className="copy-button">
          <i className="fas fa-copy"></i> Copy
        </button>
      </div>
      <div className="prompt-content">
        <p>{prompt}</p>
      </div>
    </div>
  );
}; 