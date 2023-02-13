import React from 'react'
import Books from './Books'

const BookLists = ({ Image, Title, Author }) => {
  return (
    <section>
      <Books Image={Image} Title={Title} Author={Author} />
    </section>
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

export default BookLists
