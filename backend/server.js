const express = require("express")
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const multer = require("multer");
const path = require('path');
const nanoid = require('nanoid').nanoid;
require('dotenv').config();
const app = express();

app.use(bodyparser.json());

//Database Coonection
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://admin:admin99@cluster0.pu7h1.mongodb.net/headsdb?retryWrites=true&w=majority")
    .then(err => {
        console.log('Database Connected Successfully!!');
    })


//schema models user
require('./model/usermodel')
mongoose.model("Userschema")

//schema models Admin
require('./model/adminmodel')
mongoose.model("Adminschema")
require('./model/jobmodel')
mongoose.model("Jobschema")
require('./model/jobapplymodel')
mongoose.model("Applyschema")

app.use(bodyparser.json());

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'images');
    },
    filename: (req, file, cb) => {
        const filePath = nanoid() + '-' + file.originalname;
        cb(null, filePath);
    }
});

const fileFilter = (req, file, cb) => {
    if(
        file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
        ){
            cb(null, true);
        }else{
            cb(null, false);
        }
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,token');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

const upload = multer({storage: fileStorage, fileFilter: fileFilter}).single('image');

app.use(morgan('dev'))
// app.use(upload);
//Authentication routes
app.use('/usersignup', upload,require('./public/Usignup'))
app.use(require('./public/Ulogin'))
app.use('/adminsignup', upload, require('./public/Asignup'))
app.use(require('./public/Alogin'))

//routes user
app.use(require('./candidate/Uhome'))
app.use(require('./candidate/Uprofile'))
app.use(require('./candidate/editUprofile'))
app.use(require('./candidate/Ulogout'))
app.use(require('./candidate/applyjob'))
app.use(require('./candidate/ustatus'))



//routes Admin
app.use(require('./Company/Caddjob'))
app.use(require('./Company/userlist'))
app.use(require('./Company/viewprofile'))
app.use(require('./Company/astatus'))




//server running Status
app.listen(process.env.PORT, () => {
    console.log(`Server Running at http://localhost:${process.env.PORT}`)
})

// exports.upload = upload;

