import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <p>Frontend for this website was created by Pernilla Lumikero using React and Typescript. API calls are made to <Link to='https://fakestoreapi.com/'>Fake Store API</Link>.</p>
    </div>
  )
}

export default Footer
