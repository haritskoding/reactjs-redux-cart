import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import currencyFormatter from 'currency-formatter'
import { useDispatch, useSelector } from 'react-redux';
import "./detail.css"
import { BsDash, BsPlus } from 'react-icons/bs';
import MultiStars from '../components/MultiStars';

const Details = () => {
    const [quantity, setQuantity] = useState(1)
    const [toko, setToko] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductsReducer);

    const changeToko = async () => {
        await setToko(product.toko)
    }
    useEffect(() => {
        changeToko();
        dispatch({ type: 'PRODUCT', id })
    }, [id, toko]);

    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                    <div className="details__store">
                        <div style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            {/* <div>
                                <img style={{ width: '50px' }} src={`${toko.image}`} alt="" />
                                <span style={{ marginLeft: '20px' }}>{toko.nama}</span>
                            </div> */}

                        </div>
                        <div>
                            {/* <MultiStars stars={product.toko.rating} />
                            ({toko.rating}/5) */}
                        </div>

                    </div>

                    <div className="details__prices">
                        <span className="details__actual">
                            Rp.{currencyFormatter.format(product.price,
                            { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })}
                        </span>
                        <span className="details__discount">
                            Rp.{currencyFormatter.format(product.discountPrice,
                            { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })}
                        </span>
                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
                            <span className="dec" onClick={decQuantity}><BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus /></span>
                            <button className="btn-default"
                                onClick={() => dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: { product, quantity }
                                })}>add to cart</button>
                        </div>
                    </div>
                    <div className="rating__product">
                        Stars :  <MultiStars stars={product.stars} /> {product.stars}/5
                    </div>
                    <div className="details__p">
                        <h4>Details</h4>
                        {product.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
