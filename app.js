const express = require('express');

const connectDB = require('./config/db');
require('./models/User');
require('./models/Post');

connectDB();
const app = express();

app.use(express.json());

app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});
