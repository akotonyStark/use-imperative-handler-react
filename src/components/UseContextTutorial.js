import React, { useContext } from 'react'
import { AppContext } from '../App'

function UseContextTutorial() {
  const { author, framework } = useContext(AppContext)
  return (
    <div>
      <p>
        This app was developer by {author} using {framework} framework
      </p>
    </div>
  )
}

export default UseContextTutorial
