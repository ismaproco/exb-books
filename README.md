# Development Task

The project is divided in three folders

client - the frontend client
server - dumb rest server
dist - bundle of the deployment client

please go first and start the dumb server, it already contains a copy of the bundle of the client.

```
cd server/
npm install
npm start
```

The server will start in the localhost  with port 3000
and you can browse it in:

http://localhost:3000


To try the development environment follow this steps

```
cd client/
npm install
gulp
```

This will start a webpack-dev-server in localhost with port 8090

Then browse http://localhost:8090 and use the app, but be sure to have running and instance of the dumb server to be able to test the rest calls, or change the endpoint to a custom server.

