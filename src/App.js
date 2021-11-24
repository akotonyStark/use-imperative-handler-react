import logo from './logo.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'
import { createContext } from 'react'

export const AppContext = createContext(null)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <AppContext.Provider
          value={{ author: 'Augustine', framework: 'ReactJS' }}
        >
          <ParentComponent />
        </AppContext.Provider>
      </header>
    </div>
  )
}

export default App
