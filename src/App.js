import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import QuoteDetails from './pages/QuoteDetail';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      <Layout>
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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
