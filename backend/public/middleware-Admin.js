const express = require('express')
const mongoose = require('mongoose')
const Adminschema = mongoose.model('Adminschema')
const jwt = require('jsonwebtoken')

module.exports = ((req, res, next) => {
    var token = req.headers.token

    if (!token) {
        res.json({
            error: "You are not an Authorized user!!"
        })
        res.status(401)
    }
    else {
        jwt.verify(token, 'key2000', (err, data) => {
            
            if (data) {
                Adminschema.findOne({
                    $and: [{ email: data.email }, { _id: data.id }, { Admin: data.admin }]
                })
                    .then((details) => {

                        if (details) {
                            req.admin = details
                            next()
                        }
                        else
                        {
                            res.json({
                                error: "You Are Not an Authorized Admin-Login First!!"
                            })
                            res.status(421)
                        }

                    })
            }
            else {
                res.json({
                    error: "You Are Not an Authorized Admin-Login First!!"
                })
                res.status(421)
            }
        })
    }
})
