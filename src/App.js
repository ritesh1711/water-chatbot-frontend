import React from 'react';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* 🔁 Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔤 Content */}
      <div className="chat-content">
        <h1>💧 Water Conservation Chatbot</h1>
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
