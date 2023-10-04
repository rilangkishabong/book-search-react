// src/actions/index.js

export const initializeArray = (data) => ({
    type: 'GET_BOOKS',
    payload: data,
});

export const eraseArray = () => ({
    type: 'EMPTY_ARRAY',
    payload: [],
})