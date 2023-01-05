
const Billing = require("./../models/billing");
const catchAsync = require("./../utils/catchAsync");


exports.addInfo = catchAsync(async(req,res,next)=>{

    const {name,amount} = req.body;

    const newbill = await Billing.create({
        name: name,
        amount: amount
      });
    
    res.status(201).json({
      status: "success",
      data: {
        newbill,
      },
    });

});

exports.getBill = catchAsync(async(req,res,next)=>{

    const allInfo = await Billing.find();

    res.status(201).json({
        status: "success",
        data: {
           allInfo
        },
      });

});