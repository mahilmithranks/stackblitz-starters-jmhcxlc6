const express = require('express');
require('dotenv').config(); 

const app = express();

app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true'; 

  if (isAdmin) {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
