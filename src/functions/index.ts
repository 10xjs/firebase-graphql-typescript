import {ApolloServer, AuthenticationError} from 'apollo-server-express';
import express from 'express';
import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import {resolvers} from './graphql/resolvers';
import {schema} from './graphql/schema';
import {Context} from './graphql/context';

import {FirebaseUser} from './firebaseUser';

admin.initializeApp();

const app = express();

const server = new ApolloServer({
  resolvers,
  typeDefs: schema,

  playground: false,

  async context({req, res}): Promise<Context> {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      throw new AuthenticationError('UNAUTHENTICATED');
    }

    try {
      const decoded = await admin.auth().verifyIdToken(token);
      const user = new FirebaseUser(decoded);

      console.log(decoded.firebase.identities);
      return {user};
    } catch (error) {
      const apolloError = new AuthenticationError('UNAUTHENTICATED');
      apolloError.originalError = error;

      throw apolloError;
    }
  },
});

server.applyMiddleware({app, path: '/', cors: true});

export const graphql = functions.https.onRequest(app);
