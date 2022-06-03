const express =require("express");
const router =express.Router();
const Input =require("../models/inputModel");

router.route("/create").post((req, res) =>{
    const name =req.body.name;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const newInput =new Input({
        name,
        phoneNumber,
        email
    });
    newInput.save();
});
router.route("/sign").get((req,res)=>{
    Input.find()
        .then(foundInput =>res.json(foundNotes))
})

module.exports =router;