//Base de datos con productos de prueba

const products =  [
    { 
        id: '1', 
        name: 'Harry Potter y la Piedra Filosofal', 
        price: 3800, 
        category: 'fisicos', 
        img:'https://http2.mlstatic.com/D_NQ_NP_885399-MLA42274904648_062020-O.webp',
        stock: 100, 
        description:'Lorem Ipsum'
    },
    { 
        id: '2', 
        name: 'Harry Potter y la Cámara de los Secretos', 
        price: 3800, 
        category: 'fisicos', 
        img:'https://http2.mlstatic.com/D_NQ_NP_889396-MLA42836182308_072020-O.webp', 
        stock: 100, 
        description:'Lorem Ipsum'
    },
    { 
        id: '3', 
        name: 'Harry Potter y el Prisionero de Azkaban', 
        price: 3800, 
        category: 'ebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_696501-MLA20353328131_072015-O.webp', 
        stock: 100, 
        description:'Lorem Ipsum'
    }
]

// Funciones que devuelven los productos (con/sin filtro)

export const getProducts = () => { //Todos los productos
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => { //Producto filtrado por id
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => { //Devuelve el elemento del objeto cuyo id coincide con el parametro
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => { //Productos filtrados por categoría
    return new Promise (resolve => {
        setTimeout(() => { //Devuelve los productos cuya categoría coincida con el parametro ingresado
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}