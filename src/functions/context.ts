import admin from 'firebase-admin';

import {Token, User} from './graphql/context';

export class FirebaseUser implements User {
  token: Token;

  constructor(public decoded: admin.auth.DecodedIdToken) {
    this.token = {
      aud: decoded.aud,
      iat: decoded.iat,
      iss: decoded.iss,
      sub: decoded.sub,
      uid: decoded.uid,
    };
  }

  get identities() {
    return this.decoded.firebase.identities;
  }

  get provider() {
    return this.decoded.firebase.sign_in_provider;
  }
}
