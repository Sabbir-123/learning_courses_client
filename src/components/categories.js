import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <h1>Category</h1>
        </div>
    );
};

export default Categories;