import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import BookForm from './BookForm';
import style from './styles/BookStore.module.css';

const BookStore = () => {
  const bookBox = [
    {
      id: uuidv4(),
      categorie: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      categorie: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      categorie: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <>
      <div className={style.bookstoreCMS}>
        <ul className={style.bookList}>
          {bookBox.map((book) => (
            <Book
              categorie={book.categorie}
              title={book.title}
              author={book.author}
              key={book.id}
            />
          ))}
        </ul>
        <BookForm />
      </div>
    </>
  );
};

export default BookStore;
