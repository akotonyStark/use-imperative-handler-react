import React, { useRef } from 'react'
import Button from './Button'
import UseContextTutorial from './UseContextTutorial'

function ParentComponent() {
  const buttonRef = useRef(null)
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Parent Button
      </button>
      <Button ref={buttonRef} />
      <UseContextTutorial />
    </div>
  )
}

export default ParentComponent
