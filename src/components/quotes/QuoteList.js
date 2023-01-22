import { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
 
  // const [isAscending, setIsAscending] = useState(false);
  // const sorting = !isAscending ? 'Ascending' : 'Descending';

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const sorting = isSortingAscending ? 'Ascending' : 'Descending';

  const changeSortingHandler = () => {
    // setIsAscending(() => !isAscending);
    // props.quotes.sort()
    // console.log(props.quotes);
    // console.log(location.search); // ?sort=asc
    // history.push('/quotes?sort=' + 'asc');

    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {sorting}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
