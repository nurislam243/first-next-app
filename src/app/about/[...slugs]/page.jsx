import React from 'react';

const AboutSlugPages = async({params}) => {
    const p = await params;
    console.log(p);
    return (
        <div>
            About slug
        </div>
    );
};

export default AboutSlugPages;