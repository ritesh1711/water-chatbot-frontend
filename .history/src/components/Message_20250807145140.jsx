import React from 'react';

const Message = ({ sender, text, isHtml }) => (
  <div className={`message ${sender}`}>
    {isHtml && sender === 'bot'
      ? <div dangerouslySetInnerHTML={{ __html: text }} />
      : <div>{text}</div>
    }
  </div>
);

export default Message;
