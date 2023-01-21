import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { Fragment } from 'react';


const QuoteDetails = () => {
  const params = useParams();
  console.log(params.quoteId);

  return (
    <Fragment>
      <p>1 quote</p>
      <p>{params.quoteId}</p>
      {/* <Route path={`/quotes/:quoteId/comments`}> */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;