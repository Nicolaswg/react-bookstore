import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    categorie: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    categorie: 'Economic',
    title: 'American Dream',
    author: 'Nicolas',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
