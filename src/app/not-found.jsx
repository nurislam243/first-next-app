import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <h1>404 Not Found</h1>
            <Link href={'/'}>Go Back to Home</Link>
        </div>
    );
};

export default NotFoundPage404;