import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link to=''>Home</Link>
                <Link to='register'>Resister</Link>
                <Link to='login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;