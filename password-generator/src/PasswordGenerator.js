import React, { useState } from 'react';

const generatePassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const password = generatePassword(passwordLength);
    setGeneratedPassword(password);
  };

  return (
    <div>
      <h2>Random Password Generator</h2>
      <label>
        Password Length:
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </label>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      {generatedPassword && (
        <div>
          <h3>Generated Password:</h3>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
