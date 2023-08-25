import React from 'react'
import './goldenButton.css'
export  function GoldenButton(props) {
    const {children} = props;
  return (
    <button class="GoldenButton" role="button">{children}</button>

  )
}
