import './ItemDetailContent.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContent = ({ id, name, img, category, description, price, stock }) => { //Recibe todos los detalles del producto a mostrar
    const handleOnAdd = (quantity) => { //Función que crea un objeto y lo loguea simulando el producto y cantidad sumados
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return ( // Arma el cuadro de producto, con el contador debajo que levanta la cantidad de unidades a sumar al carrito
        <article className="CardItem"> 
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    ${price} 
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetailContent