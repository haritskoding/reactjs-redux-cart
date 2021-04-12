import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import "./cart.css"
import { BsDash, BsPlus, BsReverseBackspaceReverse } from 'react-icons/bs';

const Cart = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="container">
                <h3>  Your Cart</h3>
                {products.length > 0 ? <>
                    <div className="row verticalAlign">
                        <div className="col-9">
                            <div className="cart__heading">
                                <div className="row" style={{ marginBottom: '25px' }}>
                                    <div className="col-2">
                                        Picture
                                    </div>
                                    <div className="col-2">
                                        Name
                                    </div>
                                    <div className="col-2">
                                        Price
                                    </div>
                                    <div className="col-2">
                                        Inc/Dec
                                    </div>
                                    <div className="col-2">
                                        Total Price
                                    </div>
                                    <div className="col-2">
                                        Remove
                                    </div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row cart__content" key={product.id}>

                                    <div className="col-2">
                                        <div className="cart__image">
                                            <img src={`/images/${product.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__name">
                                            {product.name}
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="cart__price">
                                            Rp.{currencyFormatter.format(product.price,
                                            { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="details__info cart__incDec">
                                            <div className="details__incDec text-center">
                                                <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}><BsDash /></span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })} ><BsPlus /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__total text-center">
                                            Rp.{currencyFormatter.format(product.discountPrice * product.quantity,
                                            { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__remove"
                                            onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}
                                        >
                                            <BsReverseBackspaceReverse />
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary__heading">
                                    Summary
                                </div>
                                <div className="summary__details">
                                    <div className="row">
                                        <div className="col-6">
                                            Total Items:
                                            </div>
                                        <div className="col-6">
                                            {totalQuantities}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            Total Price:
                                            </div>
                                        <div className="col-6">
                                            {currencyFormatter.format(totalPrice,
                                                { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })
                                            }

                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="checkout">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                    : 'your cart is empty'}
            </div>
        </div >
    )
}

export default Cart
