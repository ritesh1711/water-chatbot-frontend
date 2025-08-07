import React, { useState } from 'react';

const InputBox = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-box">
      <input
        type="text"
        placeholder="Type your question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default InputBox;
