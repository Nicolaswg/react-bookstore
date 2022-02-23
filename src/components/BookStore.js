import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import style from './styles/BookStore.module.css';

const BookStore = () => {
  const bookBox = useSelector((state) => state.booksReducer);
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
              id={book.id}
            />
          ))}
        </ul>
        <BookForm />
      </div>
    </>
  );
};

export default BookStore;
