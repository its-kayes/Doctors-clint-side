import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button class="btn font-bold text-white bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default PrimaryBtn;