import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, price, stock, starCount} = props.product;
    return (
        <div className = "product">
            <div className = "product__img">
                <img src={img} alt=""/>
            </div>
            <div className = "product__details">
                <div className = "product__details__name">
                    <h3>{name}</h3>
                    <p>by {seller}</p>
                </div>
                <div className = "product__details__other">
                    <div className = "product__details__other__information">
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick = {()=>props.addToCart(props.product)}><FontAwesomeIcon className = "cart__icon" icon={faCartPlus} />  add to cart</button>
                    </div>
                    <div className = "product__details__other__features">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;