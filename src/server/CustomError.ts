class CustomError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default CustomError;
