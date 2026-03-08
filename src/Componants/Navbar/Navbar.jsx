import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';
const navigationData = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "About",
        "path": "/about"
    },
    {
        "id": 3,
        "name": "Services",
        "path": "/services"
    },
    {
        "id": 4,
        "name": "Contact",
        "path": "/contact"
    },
    {
        "id": 5,
        "name": "Blog",
        "path": "/blog"
    }
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {open ?
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>
                }
                <ul className='md:hidden'>
                    {links}
                </ul>
                <h2 className='ml-4'>My Navbar</h2>
            </span>
            <ul className='md:flex hidden' >
                {
                    links
                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;