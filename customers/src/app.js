const { app, port, customers, connection } = require("./utils");
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);



app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.get("/api/customers", (req, res) => {
    const customerData = customers.map((customer) => ({
        name: customer.name,
        industry: customer.industry
    }));

    res.send({
        data: customerData
    });
});


app.post("/api/customers", (req, res) => {
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
