import { FunctionComponent } from "react";
import classes from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';

interface MainHeaderProps {
}

const MainHeader: FunctionComponent<MainHeaderProps> = () => {
    return (
        <div className={classes['main-header']}>
            <NavLink activeClassName={classes.active} className={classes['main-header__item']} to="/home">Home</NavLink>
            <NavLink activeClassName={classes.active} className={classes['main-header__item']} to="/alarm">Alarm</NavLink>
            <NavLink activeClassName={classes.active} className={classes['main-header__item']} to="/todos">Todos</NavLink>
            <NavLink activeClassName={classes.active} className={classes['main-header__item']} to="/products">Products</NavLink>
            <NavLink activeClassName={classes.active} className={classes['main-header__item']} to="/auth">Auth</NavLink>
            <NavLink activeClassName={classes.active} className={classes['main-header__item']} to="/store">Store</NavLink>
        </div>
    );
}

export default MainHeader;