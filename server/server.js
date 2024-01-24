import app from './app.js';

// START SERVER
const PORT = 8005;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
