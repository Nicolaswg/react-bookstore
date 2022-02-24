import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { APIbookRemove } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    category,
    title,
  } = props;

  const removeBookFromStore = () => {
    dispatch(APIbookRemove(id));
  };

  return (
    <>
      <li>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <button type="button" onClick={removeBookFromStore}>Remove</button>
      </li>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
