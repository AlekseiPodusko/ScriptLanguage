import React from "react";
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <h3 className="header-title">
                <Link to = '/'>
                    Game of Thrones DB
                </Link>
            </h3>
            <ul className="header-list">
                <li>
                    <Link to = '/character/'>Character</Link>
                </li>
                <li>
                    <Link to = '/house/'>House</Link>
                </li>
                <li>
                    <Link to = '/books/'>Books</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;