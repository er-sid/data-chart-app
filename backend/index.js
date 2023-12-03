const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Login endpoint
app.post('/login', (req, res) => {
 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});