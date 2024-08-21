import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data: products, state } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    if (state === 'loading') {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (state === 'error') {
        return <div className="text-center py-12 text-red-500">Something went wrong!</div>;
    }

    return (
        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-12 animate-fadeIn">
                    Our Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
