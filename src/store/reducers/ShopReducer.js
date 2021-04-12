const initState = {
    shops: [
        {
            id: 'toko-01',
            nama: 'Galuh Store',
            image: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            rating: 4.8,
            alamat: 'Jakarta Utara',
            pengiriman: [
                {
                    id: 1,
                    nama: 'sicepat',
                    status: 'regular',
                    description: 'Sicepat express cepat antar'
                },
                {
                    id: 2,
                    nama: 'JNE',
                    status: ['regular', 'express'],
                    description: 'Express pengirimannya '
                }
            ]
        },
        {
            id: 'toko-02',
            nama: 'Aris Store',
            rating: 4.6,
            alamat: 'Tanggerang Selatan',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
            ,
            pengiriman: [
                {
                    id: 1,
                    nama: 'tiki',
                    status: ['regular', 'express'],
                    description: 'Hanya satu titipan kilat'
                },
                {
                    id: 2,
                    nama: 'Grab Sameday',
                    status: ['regular', 'express'],
                    description: 'Grab '
                }
            ]
        },

        {
            id: 'toko-03',
            nama: 'Intan Shop',
            rating: 4.5,
            alamat: 'Bandung',
            image: 'https://images.unsplash.com/photo-1441984344779-4716bd9e6b04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1421&q=80',
            pengiriman: [
                {
                    id: 1,
                    nama: 'JNE',
                    status: ['regular', 'express'],
                    description: 'Express pengirimannya '
                },
                {
                    id: 2,
                    nama: 'sicepat',
                    status: ['regular'],
                    description: 'Sicepat express cepat antar'
                },

            ]
        }, {

            id: 'toko-04',
            nama: 'Komputer Ku',
            rating: 4.5,
            alamat: 'Glodok',
            image: 'https://cdn.dribbble.com/users/1787323/screenshots/11365170/media/e6c6ad993c83c7b66770d49b41c47856.png?compress=1&resize=400x300'
            ,
            pengiriman: [
                {
                    id: 1,
                    nama: 'JNE',
                    status: ['regular', 'express'],
                    description: 'Express pengirimannya '
                },
                {
                    id: 2,
                    nama: 'sicepat',
                    status: ['regular'],
                    description: 'Sicepat express cepat antar'
                },

            ]
        }

    ],
    shop: {},
    toko: {}
}


const ShopReducer = (state = initState, action) => {

    switch (action.type) {
        case "TOKO":
            return {
                ...state,
                shop: state.shops.find(tk => tk.id === action.id),
                toko: state.shops.toko
            }
        default:
            return state;
    }

    console.log('aris toko', state)
}

export default ShopReducer;