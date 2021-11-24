import React, { useRef } from 'react'
import Button from './Button'

function ParentComponent() {
  const buttonRef = useRef(null)
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default ParentComponent
