const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.status(200).json({
    message:"handling get to /products"
  });
});

router.post('/',(req,res,next)=>{
  res.status(200).json({
    message:"handling post /products"
  });
})

router.get('/:productId',(req,res,next)=>{
  const id = req.params.productId;
  if(id==="special"){
    res.status(200).json({
      message:"you discoverd the special ID",
      id:id
    });
  }
  else{
    res.status(200).json({
      message:"you passed ID"
    });
  }
})

router.patch('/:productId',(req,res,next)=>{
  res.status(200).json({
    message:"updated prduct!"
  })
})

router.delete('/:productId',(req,res,next)=>{
  res.status(200).json({
    message:"delete prduct!"
  })
})

module.exports=router;