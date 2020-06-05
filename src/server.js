const express = require('express');
const port = 8181;

const server = express();


server.listen(port, () => console.log(`Server is running at port ${port}`));
