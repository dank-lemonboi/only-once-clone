import React, {Component} from 'react'
import { connect } from 'react-redux'

 class Grid extends Component {
     constructor(props) {
         super(props)
     }

     
     render() {

         let productList = filterList.map((product, i) => <ProductTile key={product.item_id} product={product} />)

       return(
            <div className='grid-wrapper'>
                
            </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        products: state.customerReducer.products
    }
}

export default connect( mapStateToProps )(Grid)