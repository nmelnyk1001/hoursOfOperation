import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
// CSS lifted from "React the complete guide Section 20"

const MainHeader = () => {
    return( 
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/hours/1'>Hours</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/create'>Create</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/update/1'>Update</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/delete/1'>Delete</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;