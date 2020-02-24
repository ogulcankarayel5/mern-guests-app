const router = require("express").Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");
// guest model

const Guest = require('../models/Guest');

router.get('/',auth,async (req,res) => {
    try {
        console.log(req);
        const guests = await Guest.find({user:req.user.id});
        if(!guests){
            return res.status(404).json({err:"Not found guest "});
        }
        res.status(200).json(guests);
        console.log(guests);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
})


router.post('/',auth,
[
    check('name','provider name').not().isEmpty(),
    check('phone','provider phone').not().isEmpty()
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors})
    }
    const {name,phone,dietary,isconfirmed} = req.body;
    try{
        let guest = new Guest({
            user:req.user.id,
            name,
            phone,
            dietary,
            isconfirmed
        })

        guest = await guest.save();
        res.status(200).json({guest:guest});
    }catch(err){
        console.log(err.message);
        res.status(500).json({error:err});
    }

});

router.delete('/:id',auth,async (req,res) => {
    try {
        let guest = await Guest.findById(req.params.id);
        if(!guest){
            return res.status(404).json({msg:"Guest not found"});
        }

        await Guest.findByIdAndRemove(req.params.id);
        res.send('Guest removed');
    } catch (error) {
        res.status(404).json({msg:"In delete,server error"});
    }
})

router.put('/:id',auth,async (req,res) => {
    const {name,phone,dietary,isconfirmed} = req.body;
    const updatedGuest = {name,phone,dietary,isconfirmed};
    try {
        let guest = await Guest.findById(req.params.id);
        if(!guest){
            return res.status(404).json({msg:"Guest not found"});
        }

        guest = await Guest.findByIdAndUpdate(req.params.id,{$set:updatedGuest},{new:true});
        res.json({msg:"Success update",guest:guest});

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
})
module.exports=Guest;