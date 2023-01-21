import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>  
      <nav className={classes.nav}>
        <ul>
            <li>
              <Link to="all">All</Link>
            </li>
            <li>
              <Link to="add">add</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;