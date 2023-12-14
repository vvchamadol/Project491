//const db =require('../Models/register.js')

exports.register = async(req, res) => {
    try {
        //const collection = db.collection("information")

        //const user = {name:req.body.name}
        //const userData = {...req.body}
        //const regis = await collection.insertOne(userData)

        console.log(req.body)
        
        res.send('Register success')
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('error')
    }
}