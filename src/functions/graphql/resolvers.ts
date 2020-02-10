// import firebase from 'firebase';
import {Resolvers} from './types';

export const resolvers: Resolvers = {
  Query: {
    test() {
      // throw new Error('fail');
      return 'test';
    },
  },
  // Mutation: {
  //   async authTokenCreate(parent, args, context, info) {
  //     const {email, password} = args;

  //     try {
  //       const {
  //         additionalUserInfo,
  //         credential,
  //         operationType,
  //         user,
  //       } = await firebase.auth().signInWithEmailAndPassword(email, password);

  //       if (credential) {

  //       }
  //     } catch (e) {}
  //   },
  // },
};
