import React from 'react'
import Books from './Books'

const BookLists = ({ Image, Title, Author }) => {
  return (
    <section>
      <Books Image={Image} Title={Title} Author={Author} />
    </section>
  )
}

export default BookLists
