import React from 'react';
import './Items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Items = (props) => {
    const {img, name, seller, price, stock} = props.item;
    return (
        <div className="item">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className= "item-name">{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick ={() => props.handleAddProduct(props.item)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Items;