const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式   
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
}); 

app.post('/login',(req,res)=>{
    return res.send('123adsw21e1d')
})

app.listen('9000',(err)=>{
    if(!err){
        console.log('Application listening at 9000 port')
    }
})