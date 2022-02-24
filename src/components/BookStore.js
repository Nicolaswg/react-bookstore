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
              category={book.category}
              title={book.title}
              author={book.author}
              key={book.item_id}
              id={book.item_id}
            />
          ))}
        </ul>
        <BookForm />
      </div>
    </>
  );
};

export default BookStore;
