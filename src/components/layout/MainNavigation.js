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
              {/* <Link to="/quotes">All</Link> */}
              <NavLink activeClassName={classes.active} to="/quotes">All</NavLink>
            </li>
            <li>
              {/* <Link to="/new-quote">add</Link> */}
              <NavLink activeClassName={classes.active} to="/new-quote">add</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;