const express = require('express')
const mongoose = require('mongoose')
const Router = express.Router()
const Applyschema = mongoose.model("Applyschema")
const middleware = require('../public/middleware-Admin')

Router.post('/viewlist', middleware, (req, res) => {
    var sort=[]
    sort=req.body
    console.log(sort)
    Applyschema.find().populate("compid", "").populate("userid", "name email").populate("mcq", "")
        .then((a) => {
            var ar = []
            var que=[]
            var usr=[]
            var j = 0
            var b=0,s=0
            var t=0

            for (let i = 0; i < a.length; i++) {
                if (a[i].compid.username == req.admin.name) {
                    ar[j] = a[i].userid
                     que[j]=a[i].mcq
                    j = j + 1
                }
            }
            for(var h=0;h<que.length;h++)
            {
                for(var k=0;k<=que.length+1;k++)
                {
                    if(que[h][k] == sort.mcq[0] || que[h][k] == sort.mcq[1] )
                {
                    b++;

                }
                }
                if( b==2 )
                {
                    usr[t]=ar[h];
                    t++;
                }
                b=0
            }
            if(usr.length == 0)
            {
                res.json({
                    error:"No Candidates found for Specified Skills"
                })
            }
            else
            {
                res.json(usr)
            }
        })
        .catch((err) => {
            console.log(err)
        })
})


module.exports = Router
