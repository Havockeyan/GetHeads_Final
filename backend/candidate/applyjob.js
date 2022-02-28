const express = require('express')
const mongoose = require('mongoose')
const Router = express.Router()
const middleware = require('../public/middleware_all')
const Applyschema = mongoose.model("Applyschema")

Router.post('/applyjob/:id', middleware, (req, res) => {
    var compid = req.params.id
    var userid = req.user.id
    var mcq =req.body.mcq
    var add = new Applyschema({
        compid,
        userid,
        status:"Your  Request is Pending..",
        mcq
    })
    add.save()
        .then((data) => {
            if (!data) {
                res.json({
                    error: "No Data found!!"
                })
              return  res.status(404)
            }
            else {
                res.json({
                    success: "Job applied Successfully!!"

                })
                return   res.status(404)

            }
        })
        .catch(err => {
            console.log(err)
        })

})

module.exports = Router