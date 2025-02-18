# MERN project template

MongoDB + Express + React + Node (+TailwindCSS)

- client

  - prop-types 15.8.1
  - react 19.0.0
  - react-dom 19.0.0
  - react-router 7.1.5
  - tailwindcss 4.0.5

- server (type: 'module')

  - cors 2.8.5 (all CORS requests enabled)
  - dotenv 16.4.7
  - express 5.0.1
  - mongoose 8.10.0 (if preferred mongodb, change it)

.gitignore
README.md

## Usage

Create the file `.env` with your MongoDB URI:

```
MONGO_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/
PORT=3000
```

Start Server:

```
cd mern-stack/server
pnpm i
node --watch server.js
```

Start Client server: in 'client' folder run `pnpm run dev`

```
cd mern-stack/client
pnpm i
pnpm run dev
```
