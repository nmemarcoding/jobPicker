const jwt = require('jsonwebtoken');

// Create a middleware function to verify the access_token
function auth(req, res, next) {
    const accessToken = req.body.access_token;

    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    jwt.verify(accessToken, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        req.userId = decoded.id; // Use the _id claim instead of the userId claim
        next();
    });
}


module.exports = auth;