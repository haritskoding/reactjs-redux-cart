import React from 'react'
import Header from '../components/Header';
import { useSelector } from "react-redux";
import currencyFormatter from 'currency-formatter'
import { Link } from "react-router-dom"
import MultiStars from '../components/MultiStars';
import "./home.css";

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);

    const cekGambarToko = (gambar) => {
        return (
            <img style={{ width: "40px", height: "40px", borderRadius: '50%' }} src={gambar} alt={`${gambar}`} />
        )
    }


    return (
        <div>
            <Header />
            <div className="container mtb-30">
                <div className="row">
                    {products.map(product =>

                    (
                        <div className="col-3" key={product.id}>
                            <div className="product" >
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}>
                                        <img src={`/images/${product.image}`} alt='image name' />
                                    </Link>
                                </div>
                                <div className='product__name'>
                                    {product.name}
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className="product__price">
                                            <span className="actual__price">
                                                Rp.{currencyFormatter.format(product.price,
                                                { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })}
                                            </span>
                                            <span className="discount">{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='product__discount_price'>
                                            Rp.{currencyFormatter.format(product.discountPrice,
                                            { code: 'RP', thousand: '.', precision: 0, decimalDigits: 1 })}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-baru'>
                                    <div className='col-6'>
                                        <span className="stars">
                                            <MultiStars stars={product.stars} />
                                          &nbsp;({product.stars}/5)
                                        </span>
                                    </div>
                                    <div className='col-6'>
                                        <div className="terjual">
                                            Terjual : <span style={{ fontWeight: 600 }}>{product.sold}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-baru'>
                                    <div className='col-6' style={{ color: 'silver' }}>
                                        <Link to={`/toko/${product.toko.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            {cekGambarToko(product.toko.image)}
                                        </Link>

                                    </div>
                                    <div className='col-6'>
                                        <div className="nama__toko" style={{ marginTop: '10px' }}>
                                            <Link to={`/toko/${product.toko.id}`}>
                                                {product.toko.nama}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
