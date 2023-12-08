const jwt = require('jsonwebtoken')
const Model = require('../model/userModel')

module.exports = {
    verifyUser: async (req, res, next) => {
        try {
            const authHeader = req.headers.authorized || req.Headers.authorized

            if (!authHeader?.startsWith('Bearer ')) {
                return res.status(401).json({ message: 'Unauthorized', auth: false })
            }

            const token = authHeader.split(' ')[1]

            jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET,
                async (err, decode) => {
                    if (err) {
                        return res.status(403).json({ message: 'Forbidden', auth: false })
                    } else {
                        const user = await Model.findById(decode.UserInfo.id)
                        if (user?.isBanned) {
                            res.status(403).json({ auth: false, message: 'You are banned from website' })
                        } else {
                            next()
                        }
                    }

                }
            )

        } catch (error) {
            console.log(error);
        }
    }
}