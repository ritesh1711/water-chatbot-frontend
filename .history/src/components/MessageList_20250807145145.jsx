import React from 'react';
import Message from './Message';

const MessageList = ({ messages, bottomRef }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
      {/* 👇 This is your scroll target */}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
