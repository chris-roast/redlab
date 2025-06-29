import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='flex h-full justify-between'>
            <ul className='flex gap-8 h-full items-center font-extrabold ml-2'>
                <li>
                    <a href="/" className='text-nowrap text-5xl'>RedlabQE</a>
                </li>
            </ul>
            <ul className='flex gap-8 h-full items-center font-bold mr-4'>
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