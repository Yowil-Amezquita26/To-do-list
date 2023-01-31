
const authKey = (req,res,next) => {
    const token = process.env.TOKEN_SECRET
    if(req.header("secret") === token ){
        next()
    }else{
        return res.status(404).send("Access Denied")
    }
};

module.exports = authKey;