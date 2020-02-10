import {ApolloServer} from 'apollo-server-express';
import express from 'express';
// import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import {resolvers} from './graphql/resolvers';
import {schema} from './graphql/schema';

const app = express();

const server = new ApolloServer({
  resolvers,
  typeDefs: schema,

  introspection: true,
  playground: true,

  // async context({req}) {
  //   const token = req.headers.authorization?.split('Bearer ')[1] ?? '';
  //   const user = await admin.auth().verifyIdToken(token);

  //   return {
  //     user,
  //   };
  // },
});

// // app.use(async (req, res, next) => {
// //   const idToken = req.headers.authorization?.split('Bearer ')[1];

// //   if (idToken) {
// //     try {
// //       req.user = await admin.auth().verifyIdToken(idToken);
// //       next();
// //     } catch (error) {
// //       res.status(403).send('Unauthorized');
// //       return;
// //     }
// //   }
// // });

server.applyMiddleware({app, path: '/', cors: true});

export const graphql = functions.https.onRequest(app);
