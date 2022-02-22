import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <>
      <h2 className={style.formTitle}>Add new Book</h2>
      <form className={style.form}>
        <input type="text" placeholder="Book title" name="title" />
        <select placeholder="Categorie" name="categorie">
          {categories.map((type) => (
            <option key={uuidv4()} value={type}>{type}</option>
          ))}
        </select>
        <input type="submit" className={style.submit} value="Add Book" />
      </form>
    </>
  );
};

export default BookForm;
