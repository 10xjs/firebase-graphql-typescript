// import firebase from 'firebase';
import {Resolvers} from './types';

export const resolvers: Pick<Resolvers, 'Query' | 'Mutation'> = {
  Query: {
    async me(parent, args, context, info) {
      const {user} = context;

      const {
        id,
        provider,
        name = null,
        picture = null,
        email = null,
        emailVerified = null,
        phoneNumber = null,
      } = user;

      const identities = [];

      for (const provider in user.identities) {
        identities.push({
          __typename: 'UserIdentity' as const,
          provider,
          ids: user.identities[provider],
        });
      }

      return {
        __typename: 'User' as const,
        id,
        provider,
        identities,
        name,
        picture,
        email,
        emailVerified,
        phoneNumber,
      };
    },
  },

  Mutation: {
    async test() {
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
