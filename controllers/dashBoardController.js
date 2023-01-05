
const DashBoard = require("./../models/dashBoard");
const catchAsync = require("./../utils/catchAsync");

exports.addInfo = catchAsync(async(req,res,next)=>{

    const {name,amount} = req.body;

    const dashBoard = await DashBoard.create({
        name: name,
        amount: amount
      });
    
    res.status(201).json({
      status: "success",
      data: {
         dashBoard
      },
    });

});

exports.getDashboard = catchAsync(async(req,res,next)=>{

    const allInfo = await DashBoard.find();

    res.status(201).json({
        status: "success",
        data: {
           allInfo
        },
      });

});