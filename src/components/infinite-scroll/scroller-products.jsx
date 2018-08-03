import React from 'react'
import '../../styles/products.scss'
import euro from "../../assets/Euro_symbol_white.svg";
import { Link } from 'react-router-dom'



const Products = (props) => 
    <Link to={`/store/${props.item_type}/${props.item_number}`}>
        <div className="product-card" key={props.item_number}>
            <div className='product-hover'>
                <span id='name'>{props.item_name}</span>
                <span className='price-line'><div className='red-dot'></div>{`${props.price}`}<img className='euro' src={euro} alt="" /></span>
            </div>

            <div className="image-container">

                <img src={props.display_photo} alt="" />

            </div>
        </div>
    </Link>

export default Products