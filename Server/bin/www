let express = require('express');
let app = express();
const bodyParser = require('body-parser')

// 连接数据库
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectID = require('mongodb').ObjectID;
app.use(bodyParser.json())
// 对json数据处理
app.use(bodyParser.urlencoded({ extended: false }))


// 解决跨域
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8"); //post请求必须有
    next();
});

app.get('/', (req, res) => {
    res.send({
        erron: 0,
        message: [
            {
                _id: 1,
                name: "jacka",
                age: 18,
                sex: "male"
            },
            {
                _id: 2,
                name: "bobe",
                age: 12,
                sex: "know"
            }
        ]
    })
});

// 管理员身份验证
app.post("/guanliyuan",(req,res)=>{
    console.log(req.body.name,req.body.password)
    if(req.body.name == "admin" && req.body.password == "admin123"){
        res.send({
            erron:0
        })
    }else{
        res.send({
            erron:1
        })
    }
})



// 订单管理
function InsertDing(req,res){
    // 提交一个订单
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        var myobj = req.body;
        console.log(req.body)
        dbo.collection("dingdan").insertOne(myobj, function (err, reso) {
            if (err){
                res.send({
                    erron:"1"
                })
            }else{
                res.send({
                    erron:"0"
                })
            }
            db.close();
        });
    });
}
function SearchDing(req,res){
    // 查询根据用户ID获取订单
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = req.body;  // 查询条件
    
        dbo.collection("dingdan").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            res.send(result)
            db.close();
        });
    });
}
function getAllDin(req,res){
    //  获取所有的订单
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        dbo.collection("dingdan").find({}).toArray(function (err, result) { // 返回集合中所有数据
            if (err) throw err;
            res.send(result);
            console.log(result)
        });

    });
}
function getTargetDin(req,res){
    // target 查询
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = req.body;  // 查询条件
        
        dbo.collection("dingdan").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
       
            res.send(result)
            db.close();
        });
    });
}
function deleDin(req,res){
    // 删除订单
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        
        var whereStr = {"_id":new ObjectID(req.body._id)}
        dbo.collection("dingdan").deleteOne(whereStr, function (err, obj) {
            if (err) throw err;
            res.send({
                erron:"0"
            })
            db.close();
        });
    });
}
function faHuoDin(req,res){
    //  发货
    MongoClient.connect(url, function (err, db) {
        // 更新数据函数
        if (err) throw err;
        var dbo = db.db("qiche");
        var whereStr = {"_id":new ObjectID(req.body._id)} // 查询条件
        var updateStr = { $set: {"DindanState" : "已发货"} };
        dbo.collection("dingdan").updateOne(whereStr, updateStr, function (err, responens) {
            if (err) throw err;
            res.send({
                erron:"0"
            })
            db.close();
        });
    });
}
app.post("/adddingdan",(req,res)=>{
    InsertDing(req,res)
})
app.post("/searchdingdan",(req,res)=>{
    SearchDing(req,res)
})
app.post("/getalldingdan",(req,res)=>{
    getAllDin(req,res)
})
app.post("/gettargetdin",(req,res)=>{
    getTargetDin(req,res);
})
app.post("/deledindan",(req,res)=>{
    deleDin(req,res)
})
app.post("/fahuodingdan",(req,res)=>{
    faHuoDin(req,res)
})




// 首页数据获取
function xiangqing(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = {"_id":new ObjectID(req.body._id)};  // 查询条件
     
        dbo.collection("kucun").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
        
            res.send(result)
            db.close();
        });
    });
}
function searchsixtarget(req,res){
    // 返回指定的几条条数据
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = {region:req.body.region};  // 查询条件
    
        dbo.collection("kucun").find(whereStr).limit(req.body.list).toArray(function(err, result) {
            if (err) throw err;
        
            res.send(result)
            db.close();
        });
    });
}
app.post('/headericon', (req, res) => {
    searchsixtarget(req,res)
});
app.post('/xiangqingye',(req,res)=>{
    xiangqing(req,res)
})



// 库存管理
function insertOne(req,res) {
    //  插入一个数据
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        var myobj = req.body;
        console.log(req.body)
        dbo.collection("kucun").insertOne(myobj, function (err, reso) {
            if (err){
                res.send({
                    erron:"1"
                })
            }else{
                res.send({
                    erron:"0"
                })
            }
            db.close();
        });
    });
}
function searchbase(req, res) {
    // 返回集合中所有的数据
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        var mysort = { name: 1 };
        dbo.collection("kucun").find({}).sort(mysort).toArray(function (err, result) { // 返回集合中所有数据
            if (err) throw err;
            res.send(result);
        });

    });
}
function searchtarget(req,res){
    // 返回指定的数据
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = req.body;  // 查询条件
    
        dbo.collection("kucun").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
       
            res.send(result)
            db.close();
        });
    });
}
function updataOnebase(req, res) {
    MongoClient.connect(url, function (err, db) {
        // 更新数据函数
        if (err) throw err;
        var dbo = db.db("qiche");
        var whereStr = req.body.tiaojian;  // 查询条件
        var updateStr = { $set: req.body.targetbase };
        dbo.collection("kucun").updateOne(whereStr, updateStr, function (err, responens) {
            if (err) throw err;
            res.send({
                erron:"0"
            })
            db.close();
        });
    });
}
function delBase(req, res) {
    // 删除单个数据
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        
        var whereStr = req.body;  // 查询条件
        dbo.collection("kucun").deleteOne(whereStr, function (err, obj) {
            if (err) throw err;
            res.send({
                erron:"0"
            })
            db.close();
        });
    });
}
app.post("/add", (req, res) => {
    insertOne(req,res)   
})
app.post("/search", (req, res) => {
    searchbase(req, res)
})
app.post("/searchtarget", (req, res) => {
    searchtarget(req,res);
})
app.post("/update", (req, res) => {
    updataOnebase(req, res)
})
app.post("/delete", (req, res) => {
    delBase(req, res)
})



// 用户管理
function userInsert(req,res){
    // 用户注册
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        var myobj = req.body;
    
        dbo.collection("user").insertOne(myobj, function (err, reso) {
            if (err){
                res.send({
                    erron:"1"
                })
            }else{
                res.send({
                    erron:"0"
                })
            }
            db.close();
        });
    });
}
function loginCheck(req,res){
    // 用户登录密码验证
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = req.body;  // 查询条件
    
        dbo.collection("user").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
            if(result == ""){
                res.send({
                    erron:1,
              
                })
            }else{
             
                res.send({
                    erron:0,
                    _id:result[0]._id
                })
            }
            
            db.close();
        });
    });
}
function searchUser(req,res){
    // 返回所有用户
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        var mysort = { username: 1 };
        dbo.collection("user").find({}).sort(mysort).toArray(function (err, result) { // 返回集合中所有数据
            if (err) throw err;
       
            res.send(result);
        });

    });
}
function deleuser(req,res){
    // 删除多个用户
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
        
        var whereStr = req.body;  // 查询条件
        dbo.collection("user").deleteOne(whereStr, function (err, obj) {
            if (err) throw err;
            res.send({
                erron:"0"
            })
            db.close();
        });
    });
}
function updateuser(req,res){
    // 更改一个用户信息
    MongoClient.connect(url, function (err, db) {
        // 更新数据函数
        if (err) throw err;
        var dbo = db.db("qiche");
        var whereStr = req.body.tiaojian;  // 查询条件
        var updateStr = { $set: req.body.targetbase };
        
        dbo.collection("user").updateOne(whereStr, updateStr, function (err, responens) {
            if (err) throw err;
            res.send({
                erron:"0"
            })
            db.close();
        });
    });
}
function searchUsertarget(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qiche");
         var whereStr = req.body;  // 查询条件
      
        dbo.collection("user").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
   
            res.send(result)
            db.close();
        });
    });
}
app.post("/userinsert",(req,res)=>{
    userInsert(req,res)
})
app.post("/logincheack",(req,res)=>{
    loginCheck(req,res)
})
app.post("/searchuser",(req,res)=>{
    searchUser(req,res)
})
app.post("/deleuser",(req,res)=>{
    deleuser(req,res)
})
app.post("/updateuser",(req,res)=>{
    updateuser(req,res)
})
app.post("/searchusertarget",(req,res)=>{
    searchUsertarget(req,res)
})





app.listen(3000);
