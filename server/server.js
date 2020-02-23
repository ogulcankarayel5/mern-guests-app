const express = require("express");
const app = express();

const connectDB = require("./config/db");
//connect to database
connectDB();

app.use(express.json({ extended: true }));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));

app.use((req, res, next) => {
  const error = new Error("Not found ");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { msg: error.message,fromServerjs:true } });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started ${PORT}`));
