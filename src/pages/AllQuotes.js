import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Hennadii', text: 'a Learning React'},
  { id: 'q2', author: 'Zhukov', text: 'c Learning Angular'},
  { id: 'q3', author: 'Arigos', text: 'y Learning Vue is not good'},
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList 
        quotes={DUMMY_QUOTES}
      />
    </>
  );
};

export default AllQuotes;