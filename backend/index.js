const express = require("express");

const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://architsinha15700:archit@cluster0.qplkfmt.mongodb.net/del123?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB Atlas');
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/HotelUser"))
app.use('/api', require("./Routes/FoodCat"))
app.use('/api', require("./Routes/Fooditems"))
app.use('/api', require("./Routes/OrderData"))
app.use('/api', require("./Routes/NewOrder"))

app.get("/", (req, res) => {
  res.send("hello world");
  console.log("hello world")
});

app.listen(port, () => {
  console.log(`post is listening at port ${port}`);
});


