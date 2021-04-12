const initState = {
    products: [
        {
            id: 1, name: 'man t-shirt summer season ', image: '1.jpg', price: 60000,
            toko: {
                id: 'toko-01',
                nama: 'Galuh Store',
                image: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                rating: 4.8,
                alamat: 'Jakarta Utara'
            },

            discount: 5, discountPrice: 60000 - 5 / 100 * 60000, stock: 1, quantity: 1, stars: 4.5, sold: 876,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 2,
            toko: {
                id: 'toko-02',
                nama: 'Aris Store',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
                rating: 4.6,
                alamat: 'Tanggerang Selatan'
            },
            name: 'woman t-shirt summer season ', image: '2.jpg', price: 65000,
            discount: 5, discountPrice: 60000 - 5 / 100 * 65000, stock: 2, quantity: 1, stars: 3.8, sold: 275,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 3,
            toko: {
                id: 'toko-01',
                nama: 'Galuh Store',
                image: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                rating: 4.8,
                alamat: 'Jakarta Utara'
            },
            name: 'man trouser for all season', image: '3.jpg', price: 45000,
            discount: 5, discountPrice: 45000 - 5 / 100 * 45000, stock: 2, quantity: 1, stars: 4.4, sold: 770,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 4,
            toko: {
                id: 'toko-01',
                nama: 'Galuh Store',
                image: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                rating: 4.8,
                alamat: 'Jakarta Utara'
            },
            name: 'shoes for all gender', image: '4.jpg', price: 120000,
            discount: 4, discountPrice: 120000 - 3 / 100 * 120000, stock: 2, quantity: 1, stars: 3.9, sold: 70,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 5,
            toko: {
                id: 'toko-02',
                nama: 'Aris Store',
                rating: 4.6,
                alamat: 'Tanggerang Selatan',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
            },
            name: 'female soot for summer', image: '5.jpg', price: 80000,
            discount: 5, discountPrice: 80000 - 5 / 100 * 80000, stock: 5, quantity: 1, stars: 4.8, sold: 87,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 6,
            toko: {
                id: 'toko-03',
                nama: 'Intan Shop',
                rating: 4.5,
                alamat: 'Bandung',
                image: 'https://images.unsplash.com/photo-1441984344779-4716bd9e6b04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1421&q=80'
            },
            name: 'male jeans', image: '6.jpg', price: 70000,
            discount: 3, discountPrice: 70000 - 3 / 100 * 70000, stock: 5, quantity: 1, stars: 3.7, sold: 120,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 7,
            toko: {
                id: 'toko-02',
                nama: 'Aris Store',
                rating: 4.6,
                alamat: 'Tanggerang Selatan',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
            },
            name: 'male trouser for all season', image: '7.jpg', price: 90000,
            discount: 2, discountPrice: 90000 - 2 / 100 * 90000, stock: 5, quantity: 1, stars: 4.8, sold: 125,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 8,
            toko: {
                id: 'toko-01',
                nama: 'Galuh Store',
                image: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                rating: 4.8,
                alamat: 'Jakarta Utara'
            },
            name: 'male jacket for winter', image: '8.jpg', price: 250000,
            discount: 10, discountPrice: 250000 - 10 / 100 * 250000, stock: 5, quantity: 1, stars: 4.8, sold: 124,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 9,
            toko: {
                id: 'toko-03',
                nama: 'Intan Shop',
                rating: 4.5,
                alamat: 'Bandung',
                image: 'https://images.unsplash.com/photo-1441984344779-4716bd9e6b04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1421&q=80'
            },
            name: 'male jacket for all seaosn', image: '9.jpg', price: 130000,
            discount: 4, discountPrice: 130000 - 4 / 100 * 130000, stock: 5, quantity: 1, stars: 4.8, sold: 121,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 10,
            toko: {
                id: 'toko-03',
                nama: 'Intan Shop',
                rating: 4.5,
                alamat: 'Bandung',
                image: 'https://images.unsplash.com/photo-1441984344779-4716bd9e6b04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1421&q=80'
            },
            name: 'male winter jacket', image: '10.jpg', price: 234000,
            discount: 10, discountPrice: 234000 - 10 / 100 * 234000, stock: 5, quantity: 1, stars: 4.8, sold: 1225,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 11,
            toko: {
                id: 'toko-04',
                nama: 'Komputer Ku',
                rating: 4.5,
                alamat: 'Glodok',
                image: 'https://cdn.dribbble.com/users/1787323/screenshots/11365170/media/e6c6ad993c83c7b66770d49b41c47856.png?compress=1&resize=400x300'
            },
            name: 'ROG Strix GL53GD', image: '11.jpg', price: 21000000,
            discount: 10, discountPrice: 21000000 - 8 / 100 * 21000000, stock: 5, quantity: 1, stars: 4.8, sold: 1225,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 12,
            toko: {
                id: 'toko-04',
                nama: 'Komputer Ku',
                rating: 4.5,
                alamat: 'Glodok',
                image: 'https://cdn.dribbble.com/users/1787323/screenshots/11365170/media/e6c6ad993c83c7b66770d49b41c47856.png?compress=1&resize=400x300'
            },
            name: 'Macbook Pro 2020', image: '12.jpg', price: 42500000,
            discount: 10, discountPrice: 42500000 - 10 / 100 * 42500000, stock: 5, quantity: 1, stars: 4.8, sold: 25,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },

    ],
    product: {},
    toko: {}
};

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        // case "TOKO":
        //     return { ...state, toko: state.products['toko'].find(tk => tk.toko.id === action.id) }
        default:
            return state;
    }
}

export default ProductReducer;