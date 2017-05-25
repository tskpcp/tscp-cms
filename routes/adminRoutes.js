// var express = require('express');
// var router = express.Router();

// var mysql=require('mysql');
// var dbConfig=require('../config/mysql');
// var adminSQL=require('../service/adminSQL');

// var pool =mysql.createPool(dbConfig.mysql);
// // 响应一个JSON数据
// var responesJSON = function(req, ret){
//     if(typeof ret=='undefined'){
//         res.json({code:'-200',msg:'操作失败'});
//     }else{
//         res.json(ret);
//     }
// }
    
// router.get('/',function(req,res,next){
//      pool.getConnection(function(err,connection){
//          res.send(adminSQL.queryAll);
//     });
     
// });
// /* GET home page. */
// router.get('/add_cms_admin', function(req, res, next) {
//      // 从连接池获取连接 
//   pool.getConnection(function(err,connection){
//      // 获取前台页面传过来的参数   
//     var param=req.query || req.params;
//     connction.query(adminSQL.insert,[param.LOGIN_ID,param.PASSWORD,param.USER_NAME,'','','',''],function(err,result){
//         if(result){
//             result={
//                 code:200,
//                 msg:'添加成功'
//             };
//         }
//         // 以json形式，把操作结果返回给前台页面     
//         responesJSON(res,result);
//         // 释放连接  
//         connection.release();
//     });
//   });
// });
// router.get('/get_cms_admin',function(req,res,next){
//     pool.getConnection(function(err,connection){
//         connection.query(adminSQL.queryAll,function(err,result){
//             if(result){
//                 result={
//                     code:200,
//                     msg:'添加成功'
//                  };
//             }
//             responesJSON(res,result);
//             connection.release();
//         });
//     });
// });
// module.exports = router;