import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

import style from './styles/BookForm.module.css';

const BookForm = () => {
  const categories = [
    'Select',
    'Action',
    'Science Fiction',
    'Horror',
    'Economy',
    'History',
  ];

  const [categorie, setCategorie] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onCategorieChange = (e) => {
    setCategorie(e.target.value);
  };

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      categorie,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategorie('');
  };

  return (
    <>
      <h2 className={style.formTitle}>Add new Book</h2>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          required
          value={title}
          onChange={onTitleChange}
          onBlur={onTitleChange}
        />
        <input
          type="text"
          placeholder="Book author"
          name="author"
          required
          value={author}
          onChange={onAuthorChange}
          onBlur={onAuthorChange}
        />
        <select
          name="categorie"
          value={categorie}
          onChange={onCategorieChange}
          onBlur={onCategorieChange}
        >
          {categories.map((type) => (
            <option
              key={uuidv4()}
              value={type}
            >
              {type}
            </option>
          ))}
        </select>
        <input
          type="button"
          className={style.submit}
          value="Add Book"
          onClick={addBookToStore}
        />
      </form>
    </>
  );
};

export default BookForm;
