//should have pagination, filtering and sorting
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book'
import bookService from "../api/bookService"
import "./style.css"
import { initializeArray } from '../actions';

const ResultsList = () => {
    const bookList = useSelector((state) => state.resultsList);
  const dispatch = useDispatch();

      useEffect(() => {
        bookService.getAllBooks().then(response => {
          dispatch(initializeArray(response.data.data));
          }).catch(err => console.log(err))
  }, [])
  return (
      <div className="container">
          {bookList.length!==0 ? bookList.map(book => 
              <Book key={book.id} title={book.title} author={book.author} />
      ): "Oops! No book found!"}
    </div>
  )
}

export default ResultsList