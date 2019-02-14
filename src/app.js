const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', require('./routers/main'));
app.listen(3000, () => {
    console.log('服务端启动成功')
});

app.use((req,res,next) => {
    res.render('index',{
        data:JSON.stringify({
            prefix:'moshaobu.com/',
            prefixAPI:'/api/'
        })
    });
    next();
});
// mongoose.connect('localhost:27017/newPreject',(err) => {
//     if(err){
//         console.log('数据库链接异常');
//         throw Error(err);
//     }
//     console.log('数据库链接成功');
// })