import React from 'react';

const ServiceDetailPage = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>Service Details</h1>
            <p>ID: { id }</p>
        </div>
    );
};

export default ServiceDetailPage;