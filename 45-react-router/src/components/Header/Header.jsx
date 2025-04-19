import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav className='flex gap-5'>
                <NavLink to="/">home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
}

export default Header;