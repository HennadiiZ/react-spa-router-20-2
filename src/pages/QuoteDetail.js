import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { Fragment } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner  from '../components/UI/LoadingSpinner';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Hennadii', text: 'a Learning React'},
//   { id: 'q2', author: 'Zhukov', text: 'c Learning Angular'},
//   { id: 'q3', author: 'Arigos', text: 'y Learning Vue is not good'},
// ];

const QuoteDetails = () => {
  const match = useRouteMatch();  
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner /> 
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p className='centered'>No quote found!</p>;
  }
  // if (!loadedQuote) {
  //   return <p className='centered'>No quote found!</p>;
  // }

  // console.log(match);
  
  // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  return (
    // <Fragment>
    //   <HighlightedQuote 
    //     quote={quote.quote} 
    //     text={quote.text} 
    //     author={quote.author}
    //   />
    //   <Route path={match.path} exact>
    //     <div className='centered'>
    //       <Link to={`${match.url}/comments`} className='btn--flat'>Load Comments</Link>
    //     </div>
    //   </Route>

    //   <Route path={`${match.path}/comments`}>
    //     <Comments />
    //   </Route>
    // </Fragment>
    <Fragment>
      <HighlightedQuote 
        text={loadedQuote.text} 
        author={loadedQuote.author}
      />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link to={`${match.url}/comments`} className='btn--flat'>Load Comments</Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
    // <Fragment>
    //   <HighlightedQuote 
    //     quote={quote.quote} 
    //     text={quote.text} 
    //     author={quote.author}
    //   />
    //   <Route path={`/quotes/${params.quoteId}`} exact>
    //     <div className='centered'>
    //       <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat'>Load Comments</Link>
    //     </div>
    //   </Route>

    //   <Route path={`/quotes/${params.quoteId}/comments`}>
    //     <Comments />
    //   </Route>
    // </Fragment>
  );
};

export default QuoteDetails;