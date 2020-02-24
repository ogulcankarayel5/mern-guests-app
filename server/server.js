const express = require("express");
const app = express();

const connectDB = require("./config/db");
//connect to database
connectDB();

app.use(express.json({ extended: true }));

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/guests", require("./routes/guests"));

app.use((req, res, next) => {
  const error = new Error("Not found ");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { msg: error.message,fromServerjs:true } });
});

app.use(function(req, res) {
  // Invalid request
        res.status(404).json({
          error: {
            'name':'Error',
            'status':404,
            'message':'Invalid Request',
            'statusCode':404,
            
          },
           message: 'Testing!'
        });
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started ${PORT}`));
