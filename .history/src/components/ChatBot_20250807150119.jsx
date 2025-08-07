import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import InputBox from './InputBox';

const ChatBot = () => {
  const [message, setmessage] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about water conservation or sanitation.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  // Utility to format bot response
  function formatBotText(text) {
    if (text.includes('*')) {
      // Convert Markdown-style bullets to HTML list
      const lines = text.split('\n');
      let inList = false;
      let formatted = '';
      lines.forEach(line => {
        if (line.trim().startsWith('*')) {
          if (!inList) {
            formatted += '<ul>';
            inList = true;
          }
          formatted += `<li>${line.replace(/^\*\s*/, '')}</li>`;
        } else if (line.trim() === '') {
          if (inList) {
            formatted += '</ul>';
            inList = false;
          }
          formatted += '<br/>';
        } else {
          if (inList) {
            formatted += '</ul>';
            inList = false;
          }
          formatted += `${line}<br/>`;
        }
      });
      if (inList) formatted += '</ul>';
      // Convert **bold** to <strong>bold</strong>
      formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return formatted;
    }
    // Fallback: just replace \n with <br/> and **bold** to <strong>
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
  }

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: 'user', text };
    setmessage((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post('const res = await axios.post('https://water-chatbot.onrender.com/chat', { input: text });
/chat', { input: text });
      const formattedText = formatBotText(res.data.reply);
      const botMessage = { sender: 'bot', text: formattedText, isHtml: true };
      setmessage((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setmessage((prev) => [...prev, { sender: 'bot', text: 'Sorry, an error occurred.' }]);
    }
  };

  return (
    <div className="chatbot-container">
      <MessageList messages={message} bottomRef={bottomRef} />
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatBot;
