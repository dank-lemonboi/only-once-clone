import React from 'react'
import { Link } from 'react-router-dom'
import euro from "../assets/Euro_symbol_white.svg";

export default function ProductTile(props) {
    const { product } = props
    return(
              <Link to={`product/${product.item_name}/${product.item_number}`}>
                <div className="product-card" key={product.item_number}>
                    <div className='product-hover'>
                        <span>{product.item_name}</span>
                        <span className='price-line'><div className='red-dot'></div>{`${product.price}`}<img className='euro' src={euro} alt="" /></span>
                    </div>
                    <div className="image-parent">
                        <div className="image-container">

                            <img src={product.display_photo} alt="" />
                        </div>
                    </div>
                </div>
            </Link>
    )
}