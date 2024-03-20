const { app, port, customers, connection } = require("./utils");
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Customer = require("./models/customer")


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const customer = new Customer({
    name: "Oskar",
    industry: "marketing"
});

customer.save();

app.get("/", (req, res) => {
    res.send(customer)
});


app.post("/", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

const start = async () => {
    try {

        await mongoose.connect(connection);
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`)
        })
    }
    catch (err) {
        console.log(err.message);
    }


}

start();
