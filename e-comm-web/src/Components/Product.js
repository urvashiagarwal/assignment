import React, { useState } from 'react';

const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [
                    {
                        id: product.id,  // Assuming each product has an 'id' property
                        quantity: quantity,
                    },
                ],
            }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Added to Cart:', data);
                    // You can handle the response data as needed (e.g., show a confirmation message)
                })
                .catch(error => {
                    console.error('Error adding to Cart:', error);
                    // Handle errors (e.g., show an error message to the user)
                });
        };

    return (
        <div>
            {/* Display product information */}
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            {/* Quantity input */}
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            {/* Add to Cart button */}
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
