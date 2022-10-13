import './ItemDetail.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../baseDeDatos'
import ItemDetailContent from '../ItemDetailContent/ItemDetailContent'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    const [product, setProduct] = useState() 
    const [loading, setLoading] = useState(true)

    const { productId } = useParams() // Trae el ID de producto desde la URL
    console.log(productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetailContent  {...product} /> {/* Arma la card de producto con los parametros del producto cuyo id recuperó de la URL*/}
        </div>
    )
}

export default ItemDetail