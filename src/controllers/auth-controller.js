const authService = require('../services/auth-service')


const login = async (req, res, next) => {

    try {
        const token = await authService.login(req.body)
        res.json({
            accessToken: token
        })
    } catch (err) {
        res.status(400)
        res.json({error: err.message})
    }
}

module.exports={
    login
}
