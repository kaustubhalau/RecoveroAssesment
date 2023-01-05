const express = require("express");
const AppError = require("./utils/appError");

const authRouter = require("./routes/authRoute");
const dashBilling = require("./routes/dashBillingRoute");

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/dashBilling",dashBilling)

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`));
});

module.exports = app;
