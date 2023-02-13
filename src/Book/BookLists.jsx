import React from 'react'
import Book from './Book'

const BookList = ({ Image, Title, Author }) => {
  return (
    <section>
      <Book Image={Image} Title={Title} Author={Author} />
    </section>
  )
}

export default BookList
