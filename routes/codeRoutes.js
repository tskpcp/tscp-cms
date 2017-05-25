var express=require('express');
var router=express.Router();
var codeService=require('../service/codeService');

router.get('/',function(req,res,next){
    res.send('updateUser');
});
router.get('/queryALL',function(req,res,next){
    codeService.queryAll(req,res,next);
});
router.get('/queryById',function(req,res,next){
    codeService.queryById(req,res,next);
});
router.post('/queryByCodeId',function(req,res,next){
    codeService.queryByCodeId(req,res,next);
});
router.post('/add',function(req,res,next){
    codeService.add(req,res,next);
});
router.get('/delete',function(req,res,next){
    codeService.delete(req,res,next);
});
router.get('/updateUser', function(req, res, next) {
  res.render('updateUser');
});
router.post('/update',function(req,res,next){
    codeService.update(req,res,next);
});
module.exports = router;