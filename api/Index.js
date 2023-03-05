const express = require("express");
const app = express();
const moongose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const prRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

const cors = require("cors");

  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


moongose
.connect("mongodb+srv://ele:ele@cluster0.nvf1xrz.mongodb.net/taizo?retryWrites=true&w=majority")
.then(()=>console.log("Connection success"))
.catch((err)=>{console.log(err)});

app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", prRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);



app.listen( 5000,()=>{
    console.log("Backend server is running");
})