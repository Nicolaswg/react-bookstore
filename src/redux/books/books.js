const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'Z7Gd36zz6ACZ9JheK2iG';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const APIbookPost = (book) => async (dispatch) => {
  dispatch(addBook(book));
  await fetch(`${baseURL}/apps/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export const APIbookGet = () => async (dispatch) => {
  await fetch(`${baseURL}/apps/${appID}/books`)
    .then((response) => response.json())
    .then((item) => {
      const LIST = Object.entries(item).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        category: value[0].category,
      }));
      if (LIST) {
        dispatch(addBook(LIST));
      }
    });
};

export const APIbookRemove = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(`${baseURL}/apps/${appID}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
