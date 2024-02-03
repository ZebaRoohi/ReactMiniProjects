import React, { useState } from 'react';

const WordLetterCounter = () => {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const countLetters = () => {
    const letters = text.replace(/\s/g, '').split('');
    return letters.length;
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-letter-counter">
      <h2>Word and Letter Counter</h2>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleInputChange}
      ></textarea>
      <div className="counter-results">
        <p>
          Word Count: <span>{countWords()}</span>
        </p>
        <p>
          Letter Count: <span>{countLetters()}</span>
        </p>
      </div>
    </div>
  );
};

export default WordLetterCounter;
