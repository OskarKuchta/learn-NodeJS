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
    name: "Jon",
    industry: "salesman"
});

app.get("/", (req, res) => {
    res.send("Welcome!")
});

app.get("/api/customers", async (req, res) => {
    try {

        const result = await Customer.find();
        res.json({
            "customers": result
        })
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
})

app.post("/api/customers", async  (req, res) => {
    console.log(req.body);
    const customer = new Customer({
        name: req.body.name,
        industry: req.body.industry
    })
    try {

        await customer.save();
        res.status(201).json({
            customer
        });
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
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
