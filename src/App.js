// import QuoteDetails from './pages/QuoteDetail';
// import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import NotFound from './pages/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import React, { Suspense } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';

// const NewQuote = React.lazy(async () => await import('./pages/NewQuote')); 
const NewQuote = React.lazy(() => import('./pages/NewQuote')); 
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetail')); 
const NotFound = React.lazy(() => import('./pages/NotFound')); 
const AllQuotes = React.lazy(() => import('./pages/AllQuotes')); 

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div className='centered'> <LoadingSpinner/> </div>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes"/>
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route> 
            <Route path="/quotes/:quoteId">
              <QuoteDetails />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>  
            <Route path="*">
              <NotFound />
            </Route> 
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
