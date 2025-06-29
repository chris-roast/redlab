import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='h-full mr-4'>
            <ul className='flex gap-8 h-full w-full items-center justify-end font-bold'>
                <li>
                    <a href="/" className='text-nowrap'>RedlabQE</a>
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
        </nav>
    );
};

export default NavBar;