import { useState } from 'react'
import './App.css'
import Input from './components/Input'


function App() {

  const [changeColor, setChangeColor] = useState('');
  const [ result, setResult ] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(changeColor).then( () => {
      setResult("Copied to clipboard..");
      setTimeout(() => {
        setResult('');
      }, 3000);
    }).catch((err) => console.log(err));
  }

  return (
    <>
      <div className='home-wrapper'>
        <h1>Color Picker</h1>
        <div className="color" style={{background:`${changeColor}`}}></div>
        <Input useColor={setChangeColor} handleCopy={handleCopy} />
        <p className='result'>{result}</p>
      </div>
    </>
  )
}

export default App
