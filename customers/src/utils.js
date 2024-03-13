const express = require("express");
const app = express();
const port = 3000;

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

module.exports = {
    customers, app, port
}