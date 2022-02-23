import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    categorie,
    title,
    author,
  } = props;

  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <li>
        <h3>{categorie}</h3>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="button" onClick={removeBookFromStore}>Remove</button>
      </li>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
