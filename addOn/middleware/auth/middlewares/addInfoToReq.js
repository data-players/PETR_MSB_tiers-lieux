function addInfoToReq(param) {
    return function(req, res, next) {
        for (key in param){
            req[key]=param[key]
        }
        next();
    };
}
module.exports = addInfoToReq;