import React from 'react'
import { useState } from 'react'

import './App.css'

import BookLists from './Book/booklists'
import Books from './Book/Books'

import ImageSrc from './img/img1.jpg'

const BookList = () => {
  return (
    <section className='booklist'>
      {/* <Book />*/}
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Interesting Facts of Curios Mindsss!'
  const author = 'Jordan Moore'
  return (
    <article className='book'>
      <img src={ImageSrc} alt='Interesting Facts For Curios Minds' />
      <h2>{title}</h2>
      <h4>{author}</h4>
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
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem'
  }

  return (
    <>
      {/* <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}> */}
      <h4 style={inlineHeadingStyles}>Jordan Moore</h4>
    </>
  )
}

export default App
