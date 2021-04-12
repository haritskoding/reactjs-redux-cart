import React, { useState, useEffect } from 'react';


const Kurir = ({ pengiriman }) => {
    const [namaKurir, setNamaKurir] = useState([]);


    useEffect(() => {
        if (pengiriman > 0) {
            const initialState = pengiriman.map(obj => obj.nama);
            setNamaKurir(initialState)
        }
    }, [pengiriman]);


    if (pengiriman > 0) {
        return (
            <>
                <h1>{pengiriman}</h1>
            </>
        );
    } else {
        return (
            <div style={{ marginTop: '21px', width: '80%', display: 'flex', justifyContent: 'space-between' }}>
                <img
                    style={{
                        'minWidth': '100px', 'maxWidth': '140px', height: '60px', objectFit: 'cover', borderRadius: '9 % '
                    }}
                    src={'https://upload.wikimedia.org/wikipedia/commons/3/35/Logo_J%26T_Merah_Square.jpg'}
                />
                <img
                    style={{ 'minWidth': '100px', 'maxWidth': '140px', height: '60px', objectFit: 'cover', borderRadius: '9%' }}
                    src={'https://4.bp.blogspot.com/-yKgaARxg8ds/Wg0ZLKrbnpI/AAAAAAAAE9o/lJ3vLsqmUE0k4OPDMd99zynr9I1qVj3ewCLcBGAs/s1600/JNE.png'}
                />
                <img
                    style={{ 'minWidth': '100px', 'maxWidth': '140px', height: '60px', objectFit: 'cover', borderRadius: '9%' }}
                    src={'https://rmol.s3.ap-southeast-1.amazonaws.com/images/berita/normal/2019/06/183763_12520204062019_TIKI.jpg'}
                />
            </div>
        );
    }

}

export default Kurir
