import { useState, useImperativeHandle, forwardRef } from 'react'

const Button = forwardRef((props, ref) => {
  const [showText, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!showText)
    },
  }))

  return (
    <>
      <div>
        <button onClick={() => setToggle(!showText)}>Child Button</button>
      </div>
      <div>
        {showText && (
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        )}
      </div>
    </>
  )
})

export default Button
