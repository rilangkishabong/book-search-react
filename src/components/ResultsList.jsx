//should have pagination, filtering and sorting
import React, { useEffect, useState } from 'react'
import Book from './Book'
import bookService from "../api/bookService"
import "./style.css"

const ResultsList = () => {
    const [bookList, setBookList] = useState([])
      useEffect(() => {
          bookService.getAllBooks().then(response => {
              setBookList(response.data.data)
          }).catch(err => console.log(err))
  }, [])
  return (
      <div className="container">
          {bookList.length !== 0 && bookList.map(book => 
              <Book key={book.id} title={book.title} />
      )}
    </div>
  )
}

export default ResultsList