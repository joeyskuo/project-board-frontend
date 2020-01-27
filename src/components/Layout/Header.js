import React, { Component } from 'react';

class Header extends Component {

    render() {
        return(
            <nav className={"navbar navbar-expand-sm navbar-dark bg-primary mb-4"}>
                <div className="container">
                    <a className={"navbar-brand"} href="/">Personal Management Tool</a>
                </div>

                <div className={"collapse navbar-collapse"}>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className={"nav-link"} href="">Dashboard</a></li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item"><a className={"nav-link"} href="">Sign Up</a></li>
                        <li className="nav-item"><a className={"nav-link"} href="">Login</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;