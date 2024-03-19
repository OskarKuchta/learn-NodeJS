const express = require("express");
const app = express();


if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config();
}
const port = process.env.PORT || 3000;

const customers = [
    {
        "name": "Customer 1",
        "industry": "Technology"
    },
    {
        "name": "Customer 2",
        "industry": "Healthcare"
    },
    {
        "name": "Customer 3",
        "industry": "Finance"
    }
];

const connection = process.env.CONNECTION

module.exports = {
    customers, app, port, connection
}