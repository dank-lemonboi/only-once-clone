import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import euro from "../assets/Euro_symbol_white.svg";
import { getProduct } from '../ducks/reducer'



 class ProductTile extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let width = window.innerWidth;
        const { product } = this.props
        return(
       
              <Link to={`/store/${product.item_type}/${product.item_number}`}>
                <div className={(product.item_number === 30011) ? 'third-product' : (product.item_number !== 30075) ? "product-card"  : "first-product"} key={product.item_number}>
                    <div className={(product.item_number !== 30011) ? 'product-hover' : 'third-hover'}>
                        <span id='name'>{product.item_name}</span>
                        <span className='price-line'><div className='red-dot'></div>{`${product.price}`}<img className='euro' src={euro} alt="" /></span>
                    </div>
                    
                        <div className="image-container">

                            <img src={product.display_photo} alt="" />
                        
                    </div>
                </div>
            </Link>

        //     :

            //  <Link to={`store/${product.item_type}/${product.item_number}`}>
            //     <div className="product-card" key={product.item_number}>
            //         <div className='product-hover'>
            //             <span>{product.item_name}</span>
            //             <span className='price-line'><div className='red-dot'></div>{`${product.price}`}<img className='euro' src={euro} alt="" /></span>
            //             <div onClick={ () => this.edit() }className='auth-btn'>Edit</div>
            //             <div onClick={ () => this.delete() }className='auth-btn'>Delete</div>
            //         </div>
            //         <div className="image-parent">
            //             <div className="image-container">

            //                 <img src={product.display_photo} alt="" />
            //             </div>
            //         </div>
            //     </div>
            // </Link>

        // }
        // </div>
    )
 }
}

let mapStateToProps = (state) => {
    return {
        isAdmin: state.customerReducer.isAdmin,
        // product: state.customerReducer.product
    }
}

export default connect( mapStateToProps, {getProduct} )(ProductTile)