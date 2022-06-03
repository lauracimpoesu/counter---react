import React from 'react'; 
import CounterState from './CounterState';
import CounterPrevState from './CounterPrevState';
import CounterPersonalised from './CounterPersonalised';
import Counter from './Counter';
import './App.css'

function App() {
  return (
    <> 
    {/* <CounterState initialCount={0} /> */}
    {/* <CounterPrevState initialCount={0} /> */}
    {/* <CounterPersonalised initialCount={0} /> */}
    <Counter initialCount={0} />
    </>
  );
}

export default App; 