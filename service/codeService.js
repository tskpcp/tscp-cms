var mysql=require('mysql');
var $config=require('../config/mysql');
var $sql=require('../model/codeSQL');

var pool=mysql.createPool($config.mysql);

var jsonWrite=function(res,ret){
    //console.log('ret='+ret);
    if(typeof ret==='undefined'){
        res.json({
            code:'-200',
            msg:'操作失败'
        });
    }else{
        res.json(ret);
    }
};
module.exports={
    add: function(req,res,next){
        pool.getConnection(function(err,connection){
            var param=req.query||req.params;
            connection.query($sql.insert,[param.CODE_ID,param.CODE_NAME,param.CODE_TYPE,param.CODE_VALUE1,param.CODE_VALUE2,param.CODE_VALUE3],function(err,result){
                if(result){
                    result={
                        code:200,
                        msg:'添加成功'
                    };
                }
                jsonWrite(res,result);
                connection.release();
            });
            
        });
    },
    delete:function(req,res,next){
        pool.getConnection(function(err,connection){    
            var id=+req.query.id;
            connection.query($sql.deleteById,id,function(err,result){
                if(result.affectedRows>0){
                    result={
                        code:200,
                        msg:'删除成功'
                    };
                }else{
                    result=void 0;
                }
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    update:function(req,res,next){
        var param=req.body;
        console.log('param='+param.ID);
        if(param.ID==null){
            jsonWrite(res,undefined);
            return;
        }
        pool.getConnection(function(err,connection){
            connection.query($sql.updateById,[param.CODE_ID,param.CODE_NAME,param.CODE_TYPE,param.CODE_VALUE1,param.CODE_VALUE2,param.CODE_VALUE3,+param.ID],function(err,result){
               // 使用页面进行跳转提示
                if(result.affectedRows>0){
                    res.render('suc',{
                        result:result
                    }); // 第二个参数可以直接在jade中使用
                }else{
                    res.render('fail',{
                        result:result
                    });
                }
                connection.release();
            });
        });       
    },
    queryById:function(req,res,next){
        var id=+req.query.id;
        pool.getConnection(function(err,connection){
            connection.query($sql.getById,id,function(err,result){
                jsonWrite(res,result);
                connection.release();
            });
        }); 
    },
    queryByCodeId:function(req,res,next){
        var codeId=+req.query.codeId;
        pool.getConnection(function(err,connection){
            connection.query($sql.getByCodeId,codeId,function(err,result){
                jsonWrite(res,result);
                connection.release();
            });
        });
      
    },
    queryAll:function(req,res,next){
        pool.getConnection(function(err,connection){
            connection.query($sql.queryAll,function(err,result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    }
}
