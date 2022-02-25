import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import { APIbookPost } from '../redux/books/books';

import style from './styles/BookForm.module.css';

const BookForm = () => {
  const categories = [
    '',
    'Action',
    'Science Fiction',
    'Horror',
    'Economy',
    'History',
    'Lovers',
  ];

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategorieChange = (e) => {
    setCategory(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const addBookToStore = (e) => {
    e.preventDefault();

    let newBook = {};

    if (!title || !author || !category) {
      return toast.warning('Please fill in all files');
    }

    if (title.trim().length === 0 || author.trim().length === 0) {
      setTitle('');
      setAuthor('');
      return toast.error('Unable to read data');
    }

    newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(APIbookPost(newBook));
    setTitle('');
    setCategory('');
    setAuthor('');
    return newBook;
  };

  return (
    <>
      <h2 className={style.formTitle}>Add new Book</h2>
      <form className={style.form}>
        <input
          className={style.inputForm}
          type="text"
          placeholder="Book title"
          name="title"
          required
          value={title}
          onChange={onTitleChange}
          onBlur={onTitleChange}
        />
        <input
          className={style.inputForm}
          type="text"
          placeholder="Book Author"
          name="author"
          required
          value={author}
          onChange={onAuthorChange}
          onBlur={onAuthorChange}
        />
        <select
          name="categorie"
          value={category}
          onChange={onCategorieChange}
          onBlur={onCategorieChange}
          className={style.inputSelect}
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
