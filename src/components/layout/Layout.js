import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

// import HighlightedQuote from '../quotes/HighlightedQuote';
// import NoQuotesFound from '../quotes/NoQuotesFound';
// import QuoteForm from '../quotes/QuoteForm';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation/>
      <main className={classes.main}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;