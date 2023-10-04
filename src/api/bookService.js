import http from "./http-common"

const getAllBooks = () => {
    return http.get()
}

const addBook = (book) => {
    return http.post(book)
}

const editBook = (id, newBookData) => {
    return http.put(`/${id}`, newBookData);
}

const searchBook = (title) => {
    return http.get(`?title=${title}`)
}

export default { getAllBooks, addBook, editBook, searchBook }