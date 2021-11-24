import logo from './logo.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ParentComponent />
      </header>
    </div>
  )
}

export default App
