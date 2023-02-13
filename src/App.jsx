import React from 'react'
import { useState } from 'react'

import './App.css'

import BookLists from './Book/booklists'
import Books from './Book/Books'

const BookList = () => {
  return (
    <section>
      {/* <Book />*/}
      <Book />
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
      <BookList />
      {/* <BookLists Image={Image} Title={Title} Author={Author} />
      <BookLists Image={Image} Title={Title} Author={Author} /> */}
    </div>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
    alt='book title'
  />
)
const Title = () => <h2>Interesting Facts of Curious Minds</h2>
const Author = () => {
  return <h4>Jordan Moore</h4>
}

export default App
