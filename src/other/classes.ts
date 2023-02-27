import HttpStatusCodes from '@src/constants/HttpStatusCodes';


export class RouteError extends Error {
  status: HttpStatusCodes;
  constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.status = status;
  }
}
