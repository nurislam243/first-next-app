import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className="grid grid-cols-12">
                {/* side nav */}
                <div className="col-span-3">
                    <ul>
                        <li>User List</li>
                        <li>User List</li>
                    </ul>
                </div>

                {/* Dashboard Content */}
                <div className="col-span-9">
                    {children}
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;