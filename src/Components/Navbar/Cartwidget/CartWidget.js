import './CartWidget.css' 
import { FaShoppingCart } from "react-icons/fa"

const cartwidget = () => {

    return(

        <button className='boton'> 
            <FaShoppingCart style={{fontSize:'150%'}} /> 
        </button>
    )
} 

export default cartwidget