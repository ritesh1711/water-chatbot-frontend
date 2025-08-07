import React from 'react';

const Message = ({ sender, text, isHtml }) => {
  return (
    <div className={`message ${sender}`}>
      {isHtml && sender === 'bot'
        ? <p dangerouslySetInnerHTML={{ __html: text }} />
        : <p>{text}</p>
      }
    </div>
  );
};

export default Message;
