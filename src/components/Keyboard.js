import {LuPercent, LuPlus, LuMinus, LuX, LuDivide, LuEqual, LuDelete} from 'react-icons/lu'

const Keyboard = ({setExpression, calculate, setResult}) => {
  return (
    <div>
      <button onClick={() => {
        setExpression('')
        setResult(0)
      }}>AC</button>
      <button>+/-</button>
      <button onClick={() => setExpression(prev => prev+'%')}><LuPercent /></button>
      <button onClick={() => setExpression(prev => prev+'/')}><LuDivide /></button>
      <button onClick={() => setExpression(prev => prev+'7')}>7</button>
      <button onClick={() => setExpression(prev => prev+'8')}>8</button>
      <button onClick={() => setExpression(prev => prev+'9')}>9</button>
      <button onClick={() => setExpression(prev => prev+'*')}><LuX /></button>
      <button onClick={() => setExpression(prev => prev+'4')}>4</button>
      <button onClick={() => setExpression(prev => prev+'5')}>5</button>
      <button onClick={() => setExpression(prev => prev+'6')}>6</button>
      <button onClick={() => setExpression(prev => prev+'-')}><LuMinus /></button>
      <button onClick={() => setExpression(prev => prev+'1')}>1</button>
      <button onClick={() => setExpression(prev => prev+'2')}>2</button>
      <button onClick={() => setExpression(prev => prev+'3')}>3</button>
      <button onClick={() => setExpression(prev => prev+'+')}><LuPlus /></button>
      <button onClick={() => setExpression(prev => prev+'0')}>0</button>
      <button onClick={() => setExpression(prev => prev+'.')}>.</button>
      <button onClick={() => setExpression(prev => prev.slice(0,-1))}><LuDelete /></button>
      <button onClick={() => calculate()}><LuEqual /></button>
    </div>
  )
}

export default Keyboard