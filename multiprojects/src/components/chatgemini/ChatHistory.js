import React from 'react';

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history-container">
      {chatHistory.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          <strong>{message.type === 'user' ? 'You:' : 'Bot:'}</strong> {message.message}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
