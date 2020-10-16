import React, {useState} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import {NumberButton, SpecialButton, OperatorButton} from './Buttons'
import Output from './Output'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent:'center',
    alignItems: 'center',
    background: 'linear-gradient(to left, blue, purple)',
    height: '100vh'
  },
  container: {
    width: 400,
    border: '3px solid black'
  }
}))



function App() {
  const classes = useStyles()
  const [currentNum, setCurrent] = useState('')
  const [prevNum, setPrev] = useState('')
  const [operator, setOperator] = useState(undefined)


  const clear = () => {
    setCurrent('')
    setPrev('')
    setOperator(undefined)
  }

  const addNumber = number => {
    setCurrent(x => {
     return x.toString() + number.toString()
    })
  }

  const deleteNum = () => {
    setCurrent(x => {
      return x.toString().slice(0,-1)
    })
  }

  const chooseOperation = op => {
    if (currentNum === '') return
    if (prevNum !== '') calculate()
    setOperator(op)
    setPrev(currentNum)
    setCurrent('')
  }

  const calculate = () => {
    let computation
    const prev = parseFloat(prevNum)
    const current = parseFloat(currentNum)
    if (isNaN(prev) || isNaN(current)) return
    switch (operator) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      case 'sqrt':
        computation = Math.sqrt(current)
        break
      default:
        return
    }
    setCurrent(computation)
    setPrev('')
    setOperator(undefined)
  }


  return (
    <div className="App" className={classes.root}>
        <Grid container justify='center' className={classes.container}>
          <Output currentNum={currentNum} prevNum={prevNum} operator={operator}/>
          <SpecialButton size={2} onClick={clear} text='ac'/>
          <SpecialButton  onClick={deleteNum} text='del'/>
          {/* <OperatorButton operator='sqrt' chooseOperation={chooseOperation}/> */}
          <OperatorButton operator='÷' chooseOperation={chooseOperation}/>
          <NumberButton addNumber={addNumber} number={1}/>
          <NumberButton addNumber={addNumber} number={2}/>
          <NumberButton addNumber={addNumber} number={3}/>
          <OperatorButton operator='*' chooseOperation={chooseOperation}/>
          <NumberButton addNumber={addNumber} number={4}/>
          <NumberButton addNumber={addNumber} number={5}/>
          <NumberButton addNumber={addNumber} number={6}/>
          <OperatorButton operator='+' chooseOperation={chooseOperation}/>
          <NumberButton addNumber={addNumber} number={7}/>
          <NumberButton addNumber={addNumber} number={8}/>
          <NumberButton addNumber={addNumber} number={9}/>
          <OperatorButton operator='-' chooseOperation={chooseOperation}/>
          <NumberButton addNumber={addNumber} number={'.'}/>
          <NumberButton addNumber={addNumber} number={0}/>
          <SpecialButton size={2} onClick={calculate} text='='/>
        </Grid>
    </div>
  );
}

export default App;