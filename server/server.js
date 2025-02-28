import 'dotenv/config';
import app from './app.js';
import connectDB from './lib/connectDB.js';

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
  if (error) {
    throw error;
  }
  connectDB();
  console.log(`App running on port ${PORT}...`);
});
