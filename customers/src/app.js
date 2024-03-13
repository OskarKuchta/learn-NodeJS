const { app, port, customers } = require("./utils");

app.get("/api/customers", (req, res) => {

    const htmlResponse = customers.map((customer) => `
        <div>
            <h2>Customer name: ${customer.name}</h2>
            <p>Industry: ${customer.industry}</p>
        </div>
    `).join("");
    res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})