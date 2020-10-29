import React, { useState, useEffect, useRef } from 'react';

import { links } from "../data";

function Navbar() {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h1>Logo</h1>
                    <button className="nav-toggle">
                        <svg className="burger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                </div>
                <div className="links-container show-container">
                    <ul className="links">
                        {links.map(link => (
                            <li key={link.id}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
