import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { Fragment } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Hennadii', text: 'a Learning React'},
  { id: 'q2', author: 'Zhukov', text: 'c Learning Angular'},
  { id: 'q3', author: 'Arigos', text: 'y Learning Vue is not good'},
];

const QuoteDetails = () => {
  const params = useParams();
  
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>false</p>
  }

  return (
    <Fragment>
      <HighlightedQuote 
        quote={quote.quote} 
        text={quote.text} 
        author={quote.author}
      />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;