import QuoteDetails from './QuoteDetail';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Hennadii', text: 'Learning React'},
  { id: 'q2', author: 'Zhukov', text: 'Learning Angular'},
  { id: 'q3', author: 'Arigos', text: 'Learning Vue is not good'},
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList 
        quotes={DUMMY_QUOTES}
      />
      {/* <QuoteDetails/> */}
    </>
  );
};

export default AllQuotes;