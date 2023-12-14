const Username = require('../Models/register.js')
const bcrypt = require('bcryptjs')


exports.register = async(req, res) => {
    try {
        //console.log(req.body)
        //const register = await db(req.body).save()
        //res.send(register)

        //Check duplicate
        const { name, surname, tel, username, password } = req.body
        var user = await Username.findOne({ username })
        console.log(user)

        if(user) {
            return res.send('User Already Exists!!').status400
        }

        //Encrypt
        const salt = await bcrypt.genSalt(10)
        user = new Username({
            name,
            surname,
            tel,
            username,
            password
        })
        user.password = await bcrypt.hash(password, salt)

        //Save
        await user.save()
        res.send('Register Success!!')


    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('error')
    }
}