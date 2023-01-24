import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
// import { useHistory } from 'react-router-dom';
import LoadingSpinner  from '../components/UI/LoadingSpinner';
import { useEffect } from 'react';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Hennadii', text: 'a Learning React'},
//   { id: 'q2', author: 'Zhukov', text: 'c Learning Angular'},
//   { id: 'q3', author: 'Arigos', text: 'y Learning Vue is not good'},
// ];

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);
//   const history = useHistory();

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div>
        <LoadingSpinner /> 
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <>
      {/* <QuoteList 
        quotes={DUMMY_QUOTES}
      /> */}
      <QuoteList 
        quotes={loadedQuotes}
      />
    </>
  );
};

export default AllQuotes;