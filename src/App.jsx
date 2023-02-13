import React from 'react'
import { useState } from 'react'

import './App.css'

// import BookList from './Book/booklists'
// import Book from './Book/Book'

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

function App() {
  return (
    <div className='App'>
      <Book />
      {/* <BookList />
      <Author /> */}
    </div>
  )
}

const Image = () => <h2>Image placeholder</h2>
const Title = () => <h2>Horry Potter</h2>
const Author = () => {
  return <h4>Author: Benjor</h4>
}

export default App
