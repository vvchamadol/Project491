const db = require('../Models/register.js')

exports.register = async(req, res) => {
    try {
        console.log(req.body)
        const register = await db(req.body).save()
        res.send(register)
        
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('error')
    }
}