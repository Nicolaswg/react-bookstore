import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { APIbookRemove } from '../redux/books/books';
import style from './styles/Book.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    category,
    title,
    author,
  } = props;

  const removeBookFromStore = () => {
    dispatch(APIbookRemove(id));
  };

  return (
    <div className={style.container}>
      <li className={[style.bookItem, style.itemStyle].join(' ')}>
        <h3 className={[style.subtitle, style.textStyle].join(' ')}>{category}</h3>
        <h2 className={[style.title, style.textStyle].join(' ')}>{title}</h2>
        <h3 className={[style.subtitle, style.textStyle].join(' ')}>{author}</h3>
        <ul className={style.btnList}>
          <li className={style.btn}>
            <button type="button">Comment</button>
            <button type="button" onClick={removeBookFromStore}>Remove</button>
            <button type="button">Edit</button>
          </li>
        </ul>
      </li>
      <div className={[style.status, style.itemStyle].join(' ')}>
        <div className={style.wrapper}>
          <div className={style.progress} />
          <div className={style.statusContent}>
            <h4>100%</h4>
            <h3>Completed</h3>
          </div>
        </div>
      </div>
      <div className={[style.chapterWrapper, style.itemStyle].join(' ')}>
        <div className={style.chapter}>
          <h4>CURRENT CHAPTER</h4>
          <h6>Chapter 20</h6>
          <button type="button" className={style.btnProgress}>
            Upgrade Progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
