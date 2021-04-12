import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MultiStars from '../components/MultiStars';
import "./toko.css";
import Kurir from '../components/Kurir';
import { Pembayaran } from '../components/Pembayaran';

function Toko() {
    const [pengiriman, setPengiriman] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { shop } = useSelector(state => state.ShopReducer);
    useEffect(() => {
        dispatch({ type: 'TOKO', id })
        setPengiriman(shop.pengiriman)
    }, [id, shop.pengiriman]);
    console.log('kkk', shop.pengiriman)

    return (
        <div className="container mt-100 w-80">
            <div className="row">
                <div className="col-6">
                    <h1>{shop.nama}</h1>
                    <div className="rating__toko">
                        Rating :   <MultiStars stars={shop.rating} />
                                &nbsp;({shop.rating}/5)
                    </div>

                    <div className="lokasi">
                        Lokasi :     {shop.alamat}
                    </div>
                    <div className="lokasi" style={{ marginTop: '21px' }}>
                        Metode Pembayaran :
                    </div>
                    <div>
                        <Pembayaran />
                    </div>
                    <div className="lokasi">
                        Pengiriman :
                    </div>

                    <div>
                        <Kurir pengiriman={pengiriman} />
                    </div>
                </div>
                <div className="col-6">
                    <img style={{ width: '500px' }} src={`${shop.image}`} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">

                </div>
            </div>
        </div>
    )
}

export default Toko
