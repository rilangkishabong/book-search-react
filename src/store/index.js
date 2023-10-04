// src/store/index.js

import { createStore } from 'redux';
import bookListReducer from '../reducers/bookList';

const store = createStore(bookListReducer);

export default store;
