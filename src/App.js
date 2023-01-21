import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';

// import HighlightedQuote from './components/quotes/HighlightedQuote';
// import NoQuotesFound from './components/quotes/NoQuotesFound';
// import QuoteForm from './components/quotes/QuoteForm';
import QuoteDetails from './pages/QuoteDetail';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      <MainNavigation>
        <main>
          <Switch>

            <Route path="/" exact>
              {/* <Redirect path="/quotes"/> */}
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

          </Switch>
        </main>
      </MainNavigation>
      
    </div>
  );
}

export default App;
