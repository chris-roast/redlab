import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='h-full'>
            <div className="flex h-full float-right">
                <ul className='flex gap-8 align-center h-full items-center font-bold'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;