import { useState } from 'react'

import './App.css'

import BookList from './Book/booklists'
import Book from './Book/Book'

function App() {
  return (
    <div className='App'>
      <Book />
      <BookList />
    </div>
  )
}

const Image = () => <h2>Image placeholder</h2>
const Title = () => <h2>Image placeholder</h2>

export default App
