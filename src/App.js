import {useState} from 'react'

import Keyboard from './components/Keyboard'

import './App.css';

const App = () => {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(0)
  const [history, setHistory] = useState([])

  const calculate = (value) => {
    setResult(value)
  }

  return (
    <div className="container">
      <div>History</div>
      <div>
        <p>{expression}</p>
        <p><span>=</span><span>{result}</span></p>
        <Keyboard expression={expression} setExpression={setExpression} calculate={calculate} setResult={setResult} />
      </div>
    </div>
  );
}

export default App;
