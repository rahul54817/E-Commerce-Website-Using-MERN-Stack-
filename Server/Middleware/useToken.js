const jwt = require('jsonwebtoken')
const Token = (req,res, next) =>{


    // Get token value to the json body
    const token = req.body.token || req.headers['token']

    // If the token is present
    if(token){

        const secretkey = 'JWT Secret Key'
        // Verify the token using jwt.verify method
        const decode = jwt.verify(token, secretkey);

        //  Return response with decode data
       req.user = decode;
        next();
    }else{
        

        // Return response with error
        res.json({
            login: false,
            data: 'missing Token'
        });
    }
};

module.exports = Token;