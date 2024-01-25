import 'dotenv/config';
import app from './app.js';

// START SERVER
const PORT = process.env.PORT || 8005;
app.listen(PORT, () => {
  console.log(
    `App in ${process.env.NODE_ENV} mode is running on port ${PORT}...`
  );
});
