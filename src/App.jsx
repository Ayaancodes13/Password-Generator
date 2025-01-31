import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNums, setIsNums] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const copyToClipboard = ()=>{
    let inputfield = document.getElementById("inputfield")
    inputfield.select()
    navigator.clipboard.writeText(password)
  }

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleNumChange = (e) => {
    setIsNums(e.target.checked);
  };

  const handleChar = (e) => {
    setIsChar(e.target.checked);
  };

  const generatePassword = () => {
    let generated = '';
    let numbers = '0123456789';
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let chars = '!@#$%^&*()_+';
    if (isChar) {
      alphabets += chars;
    }
    if (isNums) {
      alphabets += numbers;
    }
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * alphabets.length);
      generated += alphabets[random];
    }
    setPassword(generated);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isChar, isNums]);

  return (
    <div className="maindiv">
      <div className="innerdiv">
      <div className="input-container">
          <input type="text" value={password} readOnly id='inputfield' className="password-display" />
          <button onClick={copyToClipboard} className="copy-button">Copy</button>
        </div>
        <div className="settings">
          <div className="length-settings">
            <label className="length-label">Length: {length}</label>
            <input type="range" min="8" max="20" value={length} onChange={handleLength} className="range-slider" />
          </div>
          <div className="checkbox-settings">
            <label className="checkbox-label">Numbers</label>
            <input type="checkbox" checked={isNums} onChange={handleNumChange} className="checkbox" />
            <label className="checkbox-label">Characters</label>
            <input type="checkbox" checked={isChar} onChange={handleChar} className="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
