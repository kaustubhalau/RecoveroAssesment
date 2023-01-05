const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

//Restrict to ADMIN
exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email, role, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    name: name,
    email: email,
    role: role,
    password: password,
    passwordConfirm: passwordConfirm,
  });

  res.status(201).json({
    status: "success",
    data: {
      newUser,
    },
  });
});

// Restrict to ADMIN
exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
