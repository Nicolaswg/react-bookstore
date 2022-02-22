import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    categorie,
    title,
    author,
  } = props;

  return (
    <>
      <li>
        <h3>{categorie}</h3>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="button">Remove</button>
      </li>
    </>
  );
};

Book.propTypes = {
  categorie: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
