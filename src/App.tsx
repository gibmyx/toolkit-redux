import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {increment, decrement, incrementByAmount} from "./store/slices/counter";

function App() {
    const {count} = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>Count is: {count}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
