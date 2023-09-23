import CustomApiError from "./custom-error";

export default class UnauthorizedError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 403;
  }
}
