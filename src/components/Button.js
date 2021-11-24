import { useState } from 'react'
function Button() {
  const [toggleText, setToggle] = useState(false)
  return (
    <>
      <div>
        <button>Child Button</button>
      </div>
      <div>
        {' '}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
    </>
  )
}

export default Button
