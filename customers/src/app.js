const { app, port, customers } = require("./utils");
const express = require("express");

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
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})