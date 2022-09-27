const express = require('express');
const server = express();
const PORT = 5432;

server.use(express.json())

// When you hit the home address
server.get('/', (req, res) => {
    res.json({ message: 'I am a real web dev!'})
});

server.listen(PORT, () => {
    console.log(`\n*** Server running on http://localhost:${PORT}`)
});