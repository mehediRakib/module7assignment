const express=require('express');
const router=express.Router();

const blogController=require('../Controllers/blogController');
const commentController=require('../Controllers/commentController');
const messageController=require('../Controllers/messageController');
const portfolioController=require('../Controllers/portfolioController');
const productController=require('../Controllers/productController');

router.get('/bcCreate',blogController.create);
router.get('/bcRead',blogController.read);
router.get('/bcDelete',blogController.delete);
router.get('/bcUpdate',blogController.update);


router.get('/ccCreate',commentController.create);
router.get('/ccRead',commentController.read);
router.get('/ccDelete',commentController.delete);
router.get('/ccUpdate',commentController.update)


router.get('/mcCreate',messageController.create);
router.get('/mcRead',messageController.read);
router.get('/mcDelete',messageController.delete);
router.get('/mcUpdate',messageController.update)


router.get('/pfcCreate',portfolioController.create);
router.get('/pfcRead',portfolioController.read);
router.get('/pfcDelete',portfolioController.delete);
router.get('/pfcUpdate',portfolioController.update)

router.get('/pcCreate',productController.create);
router.get('/pcRead',productController.read);
router.get('/pcDelete',productController.delete);
router.get('/pcUpdate',productController.update)

// router.get('*',(req,res)=>{
//     res.status(404).json({
//         status:404
//     })
// })


module.exports=router;
