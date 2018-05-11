let session_id = 1;

module.exports = function(req, res, next){
    console.log('before',req.session.user)
    if (!req.session.user) {
        req.session.user = { session_id: '', cart: [] }
        req.session.user.session_id = session_id;
        session_id++;
        console.log('after', req.session.user)
    }

    next()
}