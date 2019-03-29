const http=require('http');
const express=require('express');
const path = require('path');
//服务器
let app=express();
http.createServer(app).listen(5050);

// 中间件
let bodyParser=require('body-parser');
let cookieParser=require('cookie-parser');
let cors=require('cors');
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser({extended:false}));
app.use(cookieParser());
app.use(cors({
  origin:'*',
  credentials:true
}));

// 路由
app.use('/cart',require('./routes/cart'));
app.use('/news',require('./routes/news'));
app.use('/user',require('./routes/user'));
app.use('/product',require('./routes/product'));