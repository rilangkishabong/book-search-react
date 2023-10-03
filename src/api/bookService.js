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

export default { getAllBooks, addBook, editBook }