import { useState, Suspense } from 'react'
import { Button } from 'antd'
import { useRecoilState } from 'recoil'
import { textState } from '../store'

const Home = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useRecoilState(textState)

  return (
    <div className="App">
      <p className="text-3xl font-bold underline">Hello Vite + React + Antd!</p>
      <p>
        <Button type="primary" onClick={() => {
          setCount((count) => count + 1)
          setText(count + '')
        }}>
          count is: {count} / {text}
        </Button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
      </p>
    </div>
  )
}

export default Home
