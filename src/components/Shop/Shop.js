import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Items from '../Items/Items'
import Cart from '../Cart/Cart';

const Shop = () => {
   const first10 = fakeData.slice(0, 10);
   const [products, setProducts] = useState(first10);
   const [cart, setCart] = useState([]);

   const handleAddProduct = (item) =>{
       const newCart = [...cart, item];
       setCart(newCart);
   }
    return (
        <div className = "shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Items
                        handleAddProduct = {handleAddProduct} 
                        item={pd}>
                        </Items>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;