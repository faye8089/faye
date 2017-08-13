/**
 * Created by faye on 2017/6/27.
 */

var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.send('Ê×Ò³');
});

module.exports=router;