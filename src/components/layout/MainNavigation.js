import classes from './MainNavigation.module.css';
import { Link, NavLink } from 'react-router-dom';


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/" className={classes.logo}>Logo</Link>
      </div>  
      <nav className={classes.nav}>
        <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/quotes">All Quotes</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/new-quote">add a Quote</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;