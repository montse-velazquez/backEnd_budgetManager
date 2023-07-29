// const express = require('express')
// const app = express();
const app = require("./server");
// const port = 3000;
app.listen(3000, () => {
    console.log("Server running")
});