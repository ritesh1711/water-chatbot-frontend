import React from 'react';
import './MessageList.css';

const MessageList = ({ messages, bottomRef }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.sender}`}
          {...(msg.isHtml
            ? { dangerouslySetInnerHTML: { __html: msg.text } }
            : { children: msg.text })}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
