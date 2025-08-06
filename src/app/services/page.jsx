import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
    const data = [
    {
        id: 1,
        serviceName: "Laptop Repair",
        imageUrl: "https://static.thenounproject.com/png/2896966-512.png",
        description: "High quality laptop repair including screen replacements, hardware diagnostics, and system optimization."
    },
    {
        id: 2,
        serviceName: "Mobile Phone Repair",
        imageUrl: "https://static.thenounproject.com/png/4036221-512.png",
        description: "Fast and reliable mobile phone repair covering screen fix, battery replacement, and software troubleshooting."
    },
    {
        id: 3,
        serviceName: "Virus & Malware Removal",
        imageUrl: "https://static.thenounproject.com/png/1897218-512.png",
        description: "Complete virus and malware removal service to protect your device from threats and improve speed."
    },
    {
        id: 4,
        serviceName: "Wi‑Fi Setup & Troubleshooting",
        imageUrl: "https://static.thenounproject.com/png/80756-512.png",
        description: "Professional Wi‑Fi installation, configuration and troubleshooting for home or office networks."
    }
    ];



    return (
        <div>
            <p className='font-bold text-3xl'>Services Page</p>
            {
                data.map( d =>{
                    return(
                        <div> 
                            <Link href={`/services/${d.id}`} >
                                <img src={d.imageUrl} alt="" />
                            </Link> 
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ServicesPage;