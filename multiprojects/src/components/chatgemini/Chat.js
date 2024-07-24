import React, { useState } from 'react';
import ChatHistory from './ChatHistory';
import Loading from './Loading';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMsg = async () => {
    if (userInput.trim() === '') return;

    setIsLoading(true);
    try {
      // Initialize Gemini API
      const genAI = new GoogleGenerativeAI('AIzaSyBsgux9vX5IQxff7u9l_eubzpRkO1vUKos');//https://aistudio.google.com/app/apikey?_gl=1*m8nqud*_ga*NDY1NTQ2MDMwLjE3MjE4MTM2MjM.*_ga_P1DBVKWT6V*MTcyMTgxMzYyMy4xLjEuMTcyMTgxMzY5Mi42MC4wLjE3NzY3MTI3
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const result = await model.generateContent(userInput);
      const response = await result.response;

      console.log(response);

      setChatHistory([
        ...chatHistory,
        { type: 'user', message: userInput },
        { type: 'bot', message: response.text() },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div>
      <ChatHistory chatHistory={chatHistory} />
      <Loading isLoading={isLoading} />
      <input
        type="text"
        placeholder="Type your message..."
        value={userInput}
        onChange={handleUserInput}
      />
      <button onClick={sendMsg} disabled={isLoading}>
        Send
      </button>
      <button onClick={clearChat}>Clear Chat</button>
    </div>
  );
};

export default Chat;
