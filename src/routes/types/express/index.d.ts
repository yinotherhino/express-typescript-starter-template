import 'express';

declare module 'express' {

  export interface Request {
    signedCookies: Record<string, string>;
  }
}
