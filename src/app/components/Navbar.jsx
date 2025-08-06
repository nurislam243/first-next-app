"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    if(!pathname.includes("dashboard")){
        return (
            <div>
                <nav className='flex justify-center'>
                    <ul className='flex justify-between w-1/2'>
                        <Link href={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link href={'/services'}>
                            <li>Services</li>
                        </Link>
                        <Link href={'about'}>
                            <li>About</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
    else{
        return <></>
    }
};

export default Navbar;