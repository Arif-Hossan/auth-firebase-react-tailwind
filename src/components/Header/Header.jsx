import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logOut, } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className="btn btn-ghost text-xl" to=''>Home</Link>


                {
                    user && <>
                        <Link className="btn btn-ghost text-xl" to='profile'>Profile</Link>
                        <Link className="btn btn-ghost text-xl" to='orders'>Orders</Link></>
                }

                {
                    user ?
                        <>
                            <><span>{user.email}</span></>
                            <><Link onClick={handleLogout} className="btn btn-ghost text-xl" to=''>Sign out</Link></>
                        </> :
                        <>
                            <Link onClick={handleLogout} className="btn btn-ghost text-xl" to='/login'>Login</Link>
                            <Link className="btn btn-ghost text-xl" to='register'>Resister</Link>
                        </>


                }

            </div>
        </div>
    );
};

export default Header;