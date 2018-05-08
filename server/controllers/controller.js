
// let session_id = 1;
module.exports = {
    // validateSession: (req, res, next) => {
    //     console.log('controller', req.session.user)
    //     if( !req.session.user.session_id ) {
    //         req.session.user.session_id = session_id
    //         session_id++;
    //         console.log(req.session.user)
    //     }
    //     res.status(200).send()
    //     let current_session = req.session.user.session_id;        
    //     if(req.session.user.session_id) {
    //         res.status(200).send({ sessionId: current_session })
    //     } else {
    //         res.status(500)

    //   }
    // },
    getProducts: (req, res, next) => {
        // console.log('gp', req.session.user )
        const db = req.app.get('db')
        db.getProducts().then( products => {
            res.status(200).send(products)
        }).catch(500)
    },
    addProduct: (req, res, next) => {
        const db = req.app.get('db')
        db.checkProductDB( [ +req.body.id ] ).then( product => {
                    // req.session.user.cart.push(+product[0].item_number)
                    // console.log('cart', req.session.user)               
                    res.status(200).send(product[0])
        }).catch(500)
    },
    productDetails: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.productDetails([ +req.body.productId ]).then( product => {
            res.status(200).send(product[0])
        }).catch(500)
    }
}