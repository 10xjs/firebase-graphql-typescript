import admin from 'firebase-admin';

import {User} from './graphql/context';

export class FirebaseUser implements User {
  constructor(public decoded: admin.auth.DecodedIdToken) {}

  get name() {
    return this.decoded.name;
  }

  get picture() {
    return this.decoded.picture;
  }

  get id() {
    return 'firebase:' + this.decoded.sub;
  }

  get identities() {
    return this.decoded.firebase.identities;
  }

  get provider() {
    return this.decoded.firebase.sign_in_provider;
  }

  get email() {
    return this.decoded.email;
  }

  get emailVerified() {
    return this.decoded.email_verified;
  }

  get phoneNumber() {
    return this.decoded.phone_number;
  }
}
