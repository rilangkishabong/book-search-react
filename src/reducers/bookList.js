// src/reducers/counter.js

const initialState = {
    resultsList: [

    ],
};

const bookListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_BOOK':
            const updatedBookList = state.resultsList.map(
                (book) => {
                    if (book.id === action.payload.id) {
                        return action.payload;
                    }
                    return book;
                }
            );
            return {
                ...state,
                resultsList: updatedBookList,
            };
        case 'GET_BOOKS':
            return { ...state, resultsList: action.payload };
        default:
            return state;
    }
};

export default bookListReducer;
