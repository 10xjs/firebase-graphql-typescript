export interface Token {
  aud: string;
  iat: number;
  iss: string;
  sub: string;
  uid: string;
}

export interface User {
  id: string;
  provider: string;
  identities: Record<string, string[]>;
  name?: string;
  picture?: string;
  email?: string;
  phoneNumber?: string;
  emailVerified?: boolean;
}

export interface Context {
  user: User;
}
