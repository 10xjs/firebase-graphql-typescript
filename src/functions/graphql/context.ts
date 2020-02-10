export interface Token {
  aud: string;
  iat: number;
  iss: string;
  sub: string;
  uid: string;
}

export interface User {
  identities: Record<string, unknown>;
  provider: string;
  token: Token;
}

export interface Context {
  user: User;
}
