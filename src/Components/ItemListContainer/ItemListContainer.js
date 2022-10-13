import './itemListContainer.css' 
import { getProductsByCategory, getProducts } from '../../baseDeDatos'
import ItemCard from '../ItemCard/ItemCard';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {

   //const categoryId = false
    const [products, setProducts] = useState([]) //Defino el/los producto/s que se va/n a mostrar 
    const [loading, setLoading] = useState(true) // Activa la pantalla de carga

    const { categoryId } = useParams() //Toma el parametro de la URL?
    console.log(categoryId)

    useEffect(() => { //Define una operación que va a ejecutarse en cada recarga
        setLoading(true) //Activa la placa de carga

        const asyncFunction = categoryId ? getProductsByCategory : getProducts //Si hay ID ejecuto el primero, sino traigo todo el resto
       
        asyncFunction(categoryId).then(response => {
            setProducts(response) //Cargo los productos en la variable
            console.log(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false) //Desactiva la placa de carga
        })  
    }, [categoryId])

    if(loading) { //Placa de carga
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='listas'>
            {products.map(prod => <ItemCard key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemListContainer