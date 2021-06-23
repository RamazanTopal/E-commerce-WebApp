const express=require('express');
const mongoose=require('mongoose');
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const app=express();
const PORT=process.env.PORT || 3000;
//routes
const pageRoute=require('./routes/pageRoutes');
const userRoute=require('./routes/userRoutes');
const adminRoute=require('./routes/adminRoutes');
const customerRoute=require('./routes/customerRoutes');
//global variable
global.userIN=null;
global.user=null;
//middleware
app.use(methodOverride('_method',{
    methods:['POST','GET']
  }));
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/FreshShop' })
}))

app.use("*",(req,res,next)=>{
    userIN=req.session.userID;
    user=req.session.user;
    next();
})
app.use("/",pageRoute);
app.use("/",userRoute);
app.use("/admin",adminRoute);
app.use("/customer",customerRoute);

mongoose.connect('mongodb://localhost/FreshShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});



app.listen(PORT,()=>{
    console.log('listening port : '+PORT);
})